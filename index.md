---
layout: default
title: Leafcuttr
description: "Leafcuttr is a Kafka-compatible edge streaming broker designed for constrained devices, flaky networks, and high-volume edge data."
---

<section class="hero">
  <h1>Edge-native streaming for the real world</h1>
  <p class="tagline">Kafka-compatible. Lightweight. Built for flaky networks, constrained devices, and high-volume edge data.</p>
  <div class="hero-strip" aria-label="Key capabilities">
    <span>Lightweight</span>
    <span>•</span>
    <span>Resilient</span>
    <span>•</span>
    <span>Kafka-Compatible</span>
    <span>•</span>
    <span>Edge-Optimized</span>
  </div>

  <div class="hero-actions">
    <a class="btn" href="{{ '/contact/' | relative_url }}">Get Started →</a>
    <a class="btn-outline" href="{{ '/benchmarks/' | relative_url }}">View Benchmarks →</a>
  </div>

  <div class="hero-terminal" aria-label="LeafCuttr quick status">
    <div class="hero-terminal__header">
      <span class="hero-terminal__dot"></span>
      <span class="hero-terminal__dot"></span>
      <span class="hero-terminal__dot"></span>
      <span class="hero-terminal__title">leafcuttr@edge:~</span>
    </div>
    <pre class="hero-terminal__body"><code>$ docker pull leafcuttr/leafcuttr:latest</code></pre>
  </div>
</section>

<section class="problem-strip">
  <div class="section-shell">
    <h2>The Edge is Broken</h2>
    <p class="section-lead">Modern data streaming tools weren’t built for the edge.</p>
    <div class="pain-grid">
      <article class="pain-card">
        <h3>Constrained devices</h3>
        <p>Devices are constrained by CPU, memory, and storage, so cloud-first stacks quickly become too heavy to run where the data starts.</p>
      </article>
      <article class="pain-card">
        <h3>Unreliable networks</h3>
        <p>Networks are intermittent, flaky, and often expensive to depend on for every message, every time.</p>
      </article>
      <article class="pain-card">
        <h3>Too much data movement</h3>
        <p>Bandwidth is expensive, data is high-volume but low signal, and teams are forced to push cloud-first architectures into environments where they do not fit.</p>
      </article>
    </div>
    <p class="section-note">Existing systems are too heavy and complex, and they fail when the edge stops behaving like a data center.</p>
  </div>
</section>

<section class="section solution-section">
  <div class="section-shell">
    <h2>Meet LeafCuttr</h2>
    <p class="section-lead">LeafCuttr is a lightweight, Kafka-compatible streaming platform built specifically for edge environments.</p>
    <div class="solution-row">
      <article class="solution-item">
        <p><strong>Kafka-compatible.</strong> Integrate without changing your existing ecosystem.</p>
      </article>
      <article class="solution-item">
        <p><strong>Runs close to the data.</strong> LeafCuttr sits at the edge, where buffering, aggregation, and forwarding can happen efficiently even when conditions are unreliable.</p>
      </article>
      <article class="solution-item">
        <p><strong>Buffer → Aggregate → Forward.</strong> Keep data local, shape it intelligently, and forward only what matters upstream.</p>
      </article>
    </div>
  </div>
</section>

<section class="section benchmark-teaser">
  <div class="section-shell">
    <h2>Performance That Matters</h2>
    <p class="section-lead">LeafCuttr is optimized for constrained environments.</p>
    <div class="stats-strip">
      <article class="stat-item">
        <div class="stat-value">80%</div>
        <div class="stat-label">Higher throughput</div>
      </article>
      <article class="stat-item">
        <div class="stat-value">40%</div>
        <div class="stat-label">Lower latency</div>
      </article>
      <article class="stat-item">
        <div class="stat-value">&lt;0.5</div>
        <div class="stat-label">CPU / 1GB RAM</div>
      </article>
    </div>
    <div class="benchmark-link-row">
      <p class="section-note">Better tail latency across p50–p999. Designed to outperform traditional Kafka in edge scenarios.</p>
      <a class="btn-outline" href="{{ '/benchmarks/' | relative_url }}">View Benchmarks →</a>
    </div>
  </div>
</section>

<section class="section features-section">
  <div class="section-shell features-shell">
    <div class="features-header">
      <h2>Built for Edge Streaming</h2>
      <p class="section-lead">LeafCuttr delivers Kafka compatibility, multi-protocol ingestion, resilience, schema registry, observability, and async replication for edge teams.</p>
    </div>
    <div class="feature-grid" aria-label="Leafcuttr platform features">
      <article class="feature-card">
        <div class="feature-card__mark">✓</div>
        <h3>Kafka-Compatible</h3>
        <p>Fully compatible with the Kafka protocol so teams can integrate without reworking their existing ecosystem.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark">✓</div>
        <h3>Multi-Protocol Gateway</h3>
        <p>Native support for MQTT, HTTP, and Kafka, with no need for proxies or additional layers.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark">✓</div>
        <h3>Lightweight &amp; Efficient</h3>
        <p>Runs on constrained devices with low CPU and memory usage.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark">✓</div>
        <h3>Resilient by Design</h3>
        <p>Handles flaky networks and intermittent connectivity without collapsing the local pipeline.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark">✓</div>
        <h3>Built-in Schema Registry</h3>
        <p>No external service required to keep schemas aligned as message formats evolve.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark">✓</div>
        <h3>Observability Included</h3>
        <p>Metrics and monitoring are part of the product, not something you bolt on later.</p>
      </article>
    </div>
    <p class="section-note feature-footnote">Async replication keeps data moving upstream when connectivity is available, without blocking local streaming.</p>
  </div>
</section>

<section class="section how-section">
  <div class="section-shell how-shell">
    <div class="how-hero">
      <p class="how-eyebrow">Workflow</p>
      <h2>Streaming, reimagined for the edge</h2>
      <p class="section-lead">LeafCuttr keeps data close to the source, survives bad networks, and forwards only the signals that matter upstream.</p>
    </div>

    <div class="how-steps">
      <article class="card how-step">
        <div class="how-step__index">01</div>
        <h3>Runs as a lightweight broker</h3>
        <p>LeafCuttr runs on edge devices or gateways close to where data is generated.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">02</div>
        <h3>Collects data from devices</h3>
        <p>It accepts MQTT, HTTP, and Kafka traffic from devices and local applications.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">03</div>
        <h3>Buffers during interruptions</h3>
        <p>When networks fail, LeafCuttr keeps buffering locally instead of dropping the flow.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">04</div>
        <h3>Aggregates and filters</h3>
        <p>Data can be shaped at the edge so downstream systems receive less noise and more signal.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">05</div>
        <h3>Forwards when ready</h3>
        <p>LeafCuttr forwards to central cloud systems when connectivity returns and capacity allows.</p>
      </article>
      <article class="card how-step how-step--aside">
        <div class="how-step__index">06</div>
        <h3>No heavy clusters</h3>
        <p>There is no constant connectivity requirement and no large distributed cluster to keep alive at the edge.</p>
      </article>
    </div>

    <div class="how-terminal card" aria-label="Edge workflow summary">
      <div class="how-terminal__header">
        <span class="mode-tag">Edge summary</span>
        <span class="how-terminal__title">leafcuttr workflow</span>
      </div>
      <pre class="how-terminal__body"><code>INPUT   → MQTT, HTTP, Kafka
EDGE    → buffer, aggregate, filter
UPSTREAM → forward when connectivity returns</code></pre>
    </div>

    <div class="how-actions cta-actions">
      <a class="btn" href="{{ '/architecture/' | relative_url }}">See Architecture →</a>
      <a class="btn-outline" href="{{ '/contact/' | relative_url }}">Talk to us →</a>
    </div>
  </div>
</section>

<section class="section use-cases-section">
  <div class="section-shell use-cases-shell">
    <div class="use-cases-head">
      <div class="use-cases-copy">
        <p class="use-cases-eyebrow">Where it fits</p>
        <h2>Built for real-world edge environments</h2>
        <p class="section-lead">Leafcuttr fits the places where cloud-first stacks break down: low bandwidth, intermittent networks, and devices that need to keep running even when the connection does not.</p>
      </div>
      <aside class="use-cases-summary card">
        <span class="mode-tag">Typical signals</span>
        <p>sensor bursts, device telemetry, video metadata, transaction events, machine state, and operational logs.</p>
        <p class="section-note">Keep data local, shape it at the edge, and forward only what matters upstream.</p>
      </aside>
    </div>

    <div class="use-case-grid">
      <article class="use-case-card use-case-card--featured">
        <p class="use-case-kicker">Industrial</p>
        <h3>Manufacturing &amp; Industrial IoT</h3>
        <p>Process machine data locally with minimal latency, even in plants with unreliable connectivity and constrained hardware.</p>
      </article>
      <article class="use-case-card">
        <p class="use-case-kicker">Buildings</p>
        <h3>Smart Buildings</h3>
        <p>Handle distributed sensor data efficiently across floors, sites, and building systems.</p>
      </article>
      <article class="use-case-card">
        <p class="use-case-kicker">Retail</p>
        <h3>Retail POS Systems</h3>
        <p>Keep stores in sync with dependable local buffering and remote delivery when connectivity returns.</p>
      </article>
      <article class="use-case-card">
        <p class="use-case-kicker">Video</p>
        <h3>Video &amp; Surveillance</h3>
        <p>Manage high-volume streams at the edge without forcing every byte upstream.</p>
      </article>
      <article class="use-case-card">
        <p class="use-case-kicker">Mobility</p>
        <h3>Connected Vehicles &amp; Telematics</h3>
        <p>Stream data through unstable networks while vehicles are in motion and routes are changing.</p>
      </article>
      <article class="use-case-card">
        <p class="use-case-kicker">Robotics</p>
        <h3>Robotics &amp; Heavy Machinery</h3>
        <p>Enable real-time decisions without depending on a cloud round trip for every event.</p>
      </article>
    </div>
  </div>
</section>

<section class="trust-strip">
  <div class="section-shell">
    <div class="trust-strip__inner">
      <p class="trust-strip__eyebrow">Proof</p>
      <div class="social-proof" aria-label="Leafcuttr trust and proof points">
        <span class="proof-pill">Kafka 4.x compatible</span>
        <span class="dot">•</span>
        <span class="proof-pill">Full durability</span>
        <span class="dot">•</span>
        <span class="proof-pill">fsync</span>
        <span class="dot">•</span>
        <span class="proof-pill">Schema registry built in</span>
        <span class="dot">•</span>
        <span class="proof-pill">Benchmarks published</span>
        <span class="dot">•</span>
        <span class="proof-pill">Edge-native optimizations</span>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="section-shell">
    <h2>Build With Us</h2>
    <p>We’re collaborating with early adopters to refine LeafCuttr for real-world use cases.</p>
    <div class="cta-actions">
      <a class="btn" href="{{ '/contact/' | relative_url }}">Get in touch →</a>
      <a class="cta-link" href="{{ '/benchmarks/' | relative_url }}">View Benchmarks →</a>
    </div>
  </div>
</section>
