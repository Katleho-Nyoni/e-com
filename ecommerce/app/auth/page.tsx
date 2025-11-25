import Form from "next/form";

export default function Authentication() {
  return (
    <>
      <Form action={onsubmit}>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
        <button>Create Account</button>
      </Form>
    </>
  );
}
