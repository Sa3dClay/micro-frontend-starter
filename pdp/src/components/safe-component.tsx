import React, { ReactNode } from "react";

interface SafeComponentProps {
  children: ReactNode;
}
interface SafeComponentState {
  hasError: boolean;
}

export default class SafeComponent extends React.Component<
  SafeComponentProps,
  SafeComponentState
> {
  constructor(props: SafeComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SafeComponentState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error("Error caught in SafeComponent:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-center text-2xl">Something went wrong!</h1>;
    }

    return this.props.children;
  }
}
