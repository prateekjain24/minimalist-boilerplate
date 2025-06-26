import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/design-system';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slideUp">
              Minimalist Design System
            </h1>
            <p className="text-xl text-black/60 mb-8 animate-slideUp animation-delay-100">
              A clean, modern foundation for building beautiful applications
            </p>
            <div className="flex gap-4 justify-center animate-slideUp animation-delay-200">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">Documentation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section border-t border-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Minimalist</CardTitle>
                <CardDescription>
                  Every element serves a purpose. No unnecessary decoration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Clean lines, sharp corners, and purposeful whitespace create focus and clarity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Scalable</CardTitle>
                <CardDescription>
                  Built on a robust token system for consistent design at any scale.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  From single components to complex applications, maintain visual harmony.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Accessible</CardTitle>
                <CardDescription>
                  WCAG compliant with built-in keyboard navigation and screen reader support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Inclusive design ensures your application works for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}