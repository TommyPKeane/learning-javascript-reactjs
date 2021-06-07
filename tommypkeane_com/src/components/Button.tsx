import * as React from "react";

type Props = {
    label: string;
    primary: boolean;
}

/**
 * Create a React.js Button
 * @function
 *
 * @param {Props} Property Object for the Button
 * @return {Object} Button DOM Element
 */
export default function Button(
    {
      label,
      primary = false,
    }: Props,
) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", mode].join(" ")}
    >
      {label}
    </button>
  );
}
