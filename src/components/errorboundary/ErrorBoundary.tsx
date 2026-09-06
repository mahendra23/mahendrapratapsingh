import React, { ReactNode, ErrorInfo } from "react";
import "./ErrorBoundary.scss";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch and handle errors in child components
 * Prevents entire app from crashing if a component throws an error
 */
export class ErrorBoundary extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h1>Oops! Something went wrong</h1>
            <p>We're sorry for the inconvenience. Please refresh the page to try again.</p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details style={{ whiteSpace: "pre-wrap" }}>
                <summary>Error Details (Development Only)</summary>
                {this.state.error.toString()}
              </details>
            )}
            <button onClick={() => window.location.reload()}>Refresh Page</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
