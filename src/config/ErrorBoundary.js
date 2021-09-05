import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventId: null };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (error.toString().indexOf("ChunkLoadError") > -1) {
      window.location.reload(true);
    }
  }

  render() {
    if (this.state.hasError) {
      //render fallback UI
      return <h1>There was an error with this listing.</h1>;
    }

    //when there's not an error, render children untouched
    return this.props.children;
  }
}
