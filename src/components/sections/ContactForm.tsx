import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { Check, Loader as Loader2, CircleAlert as AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        message: form.message,
      });

      if (error) throw error;

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-500" size={28} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Message sent successfully
        </h3>
        <p className="text-white/60 text-sm mb-6">
          We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center min-h-10 px-6 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 mb-2">
          <AlertCircle className="text-red-500 shrink-0" size={18} />
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Name"
          name="name"
          value={form.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          placeholder="Jane Doe"
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          placeholder="jane@company.com"
          required
        />
      </div>

      <Field
        label="Company"
        name="company"
        value={form.company}
        onChange={(v) => update("company", v)}
        error={errors.company}
        placeholder="Acme Inc. (optional)"
      />

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/80 mb-2"
        >
          Project details <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your project, timeline, and goals..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-white placeholder:text-white/30 text-sm transition-colors focus:outline-none focus:ring-2 min-h-11 resize-none ${
            errors.message
              ? "border-red-500/50 focus:ring-red-500/20"
              : "border-white/10 focus:ring-blue-500/30 focus:border-blue-500/30"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 w-full min-h-12 px-8 rounded-full bg-white text-black font-semibold text-base hover:bg-blue-500 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-white/80 mb-2"
      >
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-white placeholder:text-white/30 text-sm transition-colors focus:outline-none focus:ring-2 min-h-11 ${
          error
            ? "border-red-500/50 focus:ring-red-500/20"
            : "border-white/10 focus:ring-blue-500/30 focus:border-blue-500/30"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
