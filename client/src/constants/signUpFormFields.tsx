import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const signupFormFields: {
  name: "name" | "email" | "address" | "password" | "confirmPassword";
  label: string;
  component: React.ElementType;
  props?: Record<string, unknown>;
  description?: string;
}[] = [
  {
    name: "name",
    label: "Full Name",
    component: Input,
    props: {
      type: "text",
    },
  },
  {
    name: "email",
    label: "Email",
    component: Input,
    props: {
      type: "text",
    },
  },
  {
    name: "address",
    label: "Address",
    component: Textarea,
  },
  {
    name: "password",
    label: "Password",
    component: Input,
    props: {
      type: "password",
    },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    component: Input,
    props: {
      type: "password",
    },
  },
];
