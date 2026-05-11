---
layout: default
title: Leafcuttr
description: "Leafcuttr is a multi-protocol edge gateway built on top of Apache Kafka, with native support for HTTP and MQTT. Designed to run on constrained hardware and flaky networks."
---

<section class="hero">
  <h1>Edge-native streaming</h1>
  <p class="tagline">Leafcuttr is a multi-protocol edge gateway built on top of Apache Kafka, with native support for HTTP and MQTT. Designed to run on constrained hardware and flaky networks.</p>

  <div class="hero-actions">
    <a class="btn" href="https://docs.leafcuttr.io" target="_blank" rel="noopener noreferrer">Get Started →</a>
    <a class="btn-outline" href="{{ '/benchmarks/' | relative_url }}">View Benchmarks →</a>
  </div>

  <div class="hero-video" aria-label="Leafcuttr intro video">
    <iframe
      class="hero-video__frame"
      src="https://www.youtube.com/embed/WLDzqP0Eob0?start=11&rel=0"
      title="Leafcuttr intro video"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>

  <div class="hero-command" aria-label="Copy Docker pull command">
    <code class="hero-command__code">$ docker pull leafcuttr/edge-server:latest</code>
    <button class="hero-command__copy" type="button" aria-label="Copy Docker pull command" title="Copy">Copy</button>
  </div>
</section>

<section class="problem-strip">
  <div class="section-shell">
    <h2>The Edge is Broken</h2>
    <p class="section-lead">Modern data streaming tools weren’t built for the edge.</p>
    <div class="pain-grid">
      <article class="pain-card">
        <div class="pain-card__header">
          <span class="pain-card__icon" aria-hidden="true">
            <i data-lucide="hard-drive"></i>
          </span>
          <h3>Constrained devices</h3>
        </div>
        <p>Devices are constrained by CPU, memory, and storage, so cloud-first stacks quickly become too heavy to run where the data starts.</p>
      </article>
      <article class="pain-card">
        <div class="pain-card__header">
          <span class="pain-card__icon" aria-hidden="true">
            <i data-lucide="wifi-off"></i>
          </span>
          <h3>Unreliable networks</h3>
        </div>
        <p>Networks are intermittent, flaky, and often expensive to depend on for every message, every time.</p>
      </article>
      <article class="pain-card">
        <div class="pain-card__header">
          <span class="pain-card__icon" aria-hidden="true">
            <i data-lucide="arrow-left-right"></i>
          </span>
          <h3>Too much data movement</h3>
        </div>
        <p>Bandwidth is expensive, data is high-volume but low signal, and teams are forced to push cloud-first architectures into environments where they do not fit.</p>
      </article>
    </div>
  </div>
</section>

<section class="solution-section">
  <div class="section-shell">
    <h2 class="solution-heading">
      <span class="solution-heading__icon" aria-hidden="true">
        <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="" class="brand-mark" height="48">
      </span>
      <span>Meet Leafcuttr</span>
    </h2>
    <p class="section-lead">An Apache Kafka compatible event broker built for high-velocity data over flaky networks and constrained devices.</p>
    
    <figure class="architecture-diagram card" aria-label="Leafcuttr architecture overview">
      <img
        class="architecture-diagram__img"
        src="{{ '/assets/images/architecture-dark.png' | relative_url }}"
        alt="Leafcuttr deployment architecture showing Embedded Mode (Leafcuttr inside the device) and Gateway Mode (Leafcuttr on a dedicated gateway device), both connecting edge devices via Kafka, MQTT, and HTTP to a Mothership Cluster."
        loading="lazy"
        decoding="async"
      />
      <figcaption class="architecture-diagram__caption">
        <span class="architecture-diagram__caption-badge">Embedded Mode</span> — Leafcuttr runs inside each device.&ensp;
        <span class="architecture-diagram__caption-badge architecture-diagram__caption-badge--alt">Gateway Mode</span> — Leafcuttr runs on a dedicated gateway, aggregating data from surrounding devices.
      </figcaption>
    </figure>

    <div class="solution-row">
      <article class="solution-item">
        <div class="solution-item__header">
          <span class="solution-item__icon" aria-hidden="true">
            <i data-lucide="plug-2"></i>
          </span>
          <h3>Kafka-compatible</h3>
        </div>
        <p>Integrate without changing your existing ecosystem.</p>
      </article>
      <article class="solution-item">
        <div class="solution-item__header">
          <span class="solution-item__icon" aria-hidden="true">
            <i data-lucide="route"></i>
          </span>
          <h3>Runs close to the data</h3>
        </div>
        <p>Leafcuttr sits at the edge, where buffering, aggregation, and forwarding can happen efficiently even when conditions are unreliable.</p>
      </article>
      <article class="solution-item">
        <div class="solution-item__header">
          <span class="solution-item__icon" aria-hidden="true">
            <i data-lucide="layers-3"></i>
          </span>
          <h3>Buffer, aggregate, forward</h3>
        </div>
        <p>Keep data local, shape it intelligently, and forward only what matters upstream.</p>
      </article>
    </div>
  </div>
</section>

<section class="section benchmark-teaser">
  <div class="section-shell">
    <h2>Performance That Matters</h2>
    <p class="section-lead">Leafcuttr is optimized for constrained environments.</p>
    <div class="stats-strip">
      <article class="stat-item">
        <div class="stat-value">82%</div>
        <div class="stat-label">Higher throughput</div>
      </article>
      <article class="stat-item">
        <div class="stat-value">39%</div>
        <div class="stat-label">Lower latency</div>
      </article>
      <article class="stat-item">
        <div class="stat-value">95%</div>
        <div class="stat-label">Cheaper than running traditional Kafka brokers</div>
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
      <p class="section-lead">Leafcuttr delivers Kafka compatibility, multi-protocol ingestion, resilience, schema registry, observability, and async replication for edge teams.</p>
    </div>
    <div class="feature-grid" aria-label="Leafcuttr platform features">
      <article class="feature-card">
        <div class="feature-card__mark" aria-hidden="true"><i data-lucide="plug-2"></i></div>
        <h3>Kafka-Compatible</h3>
        <p>Fully compatible with the Kafka protocol so teams can integrate without reworking their existing ecosystem.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark" aria-hidden="true"><i data-lucide="blocks"></i></div>
        <h3>Multi-Protocol Gateway</h3>
        <p>Native support for MQTT, HTTP, and Kafka, with no need for proxies or additional layers.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark" aria-hidden="true"><i data-lucide="zap"></i></div>
        <h3>Lightweight &amp; Efficient</h3>
        <p>Runs on constrained devices with low CPU and memory usage.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark" aria-hidden="true"><i data-lucide="shield-check"></i></div>
        <h3>Resilient by Design</h3>
        <p>Handles flaky networks and intermittent connectivity without collapsing the local pipeline.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark" aria-hidden="true"><i data-lucide="database"></i></div>
        <h3>Built-in Schema Registry</h3>
        <p>No external service required to keep schemas aligned as message formats evolve.</p>
      </article>
      <article class="feature-card">
        <div class="feature-card__mark" aria-hidden="true"><i data-lucide="bar-chart-3"></i></div>
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
      <p class="section-lead">Leafcuttr keeps data close to the source, survives bad networks, and forwards only the signals that matter upstream.</p>
    </div>

    <div class="how-steps">
      <article class="card how-step">
        <div class="how-step__index">01</div>
        <h3>Runs as a lightweight broker</h3>
        <p>Leafcuttr runs on edge devices or gateways close to where data is generated.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">02</div>
        <h3>Collects data from devices</h3>
        <p>It accepts MQTT, HTTP, and Kafka traffic from devices and local applications.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">03</div>
        <h3>Buffers during interruptions</h3>
        <p>When networks fail, Leafcuttr keeps buffering locally instead of dropping the flow.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">04</div>
        <h3>Aggregates and filters</h3>
        <p>Data can be shaped at the edge so downstream systems receive less noise and more signal.</p>
      </article>
      <article class="card how-step">
        <div class="how-step__index">05</div>
        <h3>Forwards when ready</h3>
        <p>Leafcuttr forwards to central cloud systems when connectivity returns and capacity allows.</p>
      </article>
      <article class="card how-step how-step--aside">
        <div class="how-step__index">06</div>
        <h3>No heavy clusters</h3>
        <p>There is no constant connectivity requirement and no large distributed cluster to keep alive at the edge.</p>
      </article>
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

<section class="cta-section">
  <div class="section-shell">
    <h2>Build With Us</h2>
    <p>We’re collaborating with early adopters to refine Leafcuttr for real-world use cases.</p>
    <div class="cta-actions">
      <a class="btn" href="{{ '/contact/' | relative_url }}">Get in touch →</a>
      <a class="cta-link" href="{{ '/benchmarks/' | relative_url }}">View Benchmarks →</a>
    </div>
  </div>
</section>
