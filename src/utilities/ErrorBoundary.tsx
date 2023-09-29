import React from 'react'

interface Props {
  children: React.ReactNode;
  fallBackComponent: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallBackComponent;
    }
    return this.props.children;
  }
}