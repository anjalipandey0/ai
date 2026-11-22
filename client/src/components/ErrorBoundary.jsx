import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[Velour & Weave] Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-on-background flex items-center justify-center px-margin-mobile md:px-margin-desktop py-16">
          <div className="max-w-xl w-full bg-surface border border-outline-variant/40 p-8 md:p-12 shadow-2xl text-center">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">
              VELOUR &amp; WEAVE • ARCHIVE NOTICE
            </span>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4 leading-tight">
              An Unexpected Interruption
            </h1>
            <p className="font-body-md text-secondary mb-8 leading-relaxed">
              A momentary discord occurred while rendering the showroom archive. We have safeguarded your session.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={this.handleReload}
                className="bg-primary text-on-primary px-8 py-3.5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors"
              >
                Reload Showroom
              </button>
              <button
                onClick={this.handleGoHome}
                className="border border-outline text-primary px-8 py-3.5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container transition-colors"
              >
                Return to Gallery
              </button>
            </div>

            {this.state.error && (
              <details className="text-left border-t border-outline-variant/30 pt-4 text-xs text-secondary">
                <summary className="cursor-pointer font-label-caps uppercase hover:text-primary transition-colors">
                  Technical Diagnostics
                </summary>
                <pre className="mt-3 p-3 bg-surface-container overflow-x-auto text-[11px] text-error font-mono whitespace-pre-wrap">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
