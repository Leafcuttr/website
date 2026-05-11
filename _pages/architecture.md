---
title: Architecture
permalink: /architecture/
description: "Leafcuttr separates management, control, and data planes so edge streaming stays fast while fleet operations stay coordinated."
---

<section class="section architecture-section">
  <div class="section-shell architecture-shell">
    <div class="architecture-hero">
      <p class="architecture-eyebrow">System design</p>
      <h2>Separation without friction</h2>
      <p class="section-lead">Leafcuttr splits management, control, and data planes so edge workloads stay lean, operators stay in control, and data movement stays intentional.</p>
    </div>

    <figure class="architecture-diagram card" aria-label="Leafcuttr architecture overview">
      <img
        class="architecture-diagram__img"
        src="{{ '/assets/images/architecture-img1.jpeg' | relative_url }}"
        alt="Leafcuttr deployment architecture showing Embedded Mode (Leafcuttr inside the device) and Gateway Mode (Leafcuttr on a dedicated gateway device), both connecting edge devices via Kafka, MQTT, and HTTP to a Mothership Cluster."
        loading="lazy"
        decoding="async"
      />
      <figcaption class="architecture-diagram__caption">
        <span class="architecture-diagram__caption-badge">Embedded Mode</span> — Leafcuttr runs inside each device.&ensp;
        <span class="architecture-diagram__caption-badge architecture-diagram__caption-badge--alt">Gateway Mode</span> — Leafcuttr runs on a dedicated gateway, aggregating data from surrounding devices.
      </figcaption>
    </figure>

    <div class="architecture-grid">
      <article class="card architecture-card">
        <div class="architecture-card__header">
          <span class="architecture-card__icon" aria-hidden="true">
            <i data-lucide="layers"></i>
          </span>
          <h3>Management Plane</h3>
        </div>
        <p>The Console, Kubernetes Operator, and API coordinate fleet-level provisioning and lifecycle management without touching the data path.</p>
      </article>
      <article class="card architecture-card">
        <div class="architecture-card__header">
          <span class="architecture-card__icon" aria-hidden="true">
            <i data-lucide="radio"></i>
          </span>
          <h3>Control Plane</h3>
        </div>
        <p>The Leafcuttr Controller communicates with Leaf Monitor on each edge host over HTTP and WebSocket for bootstrap, configuration, change management, and metrics.</p>
      </article>
      <article class="card architecture-card">
        <div class="architecture-card__header">
          <span class="architecture-card__icon" aria-hidden="true">
            <i data-lucide="database"></i>
          </span>
          <h3>Data Plane</h3>
        </div>
        <p>The Leafcuttr Server accepts Kafka, MQTT, and HTTP traffic at the edge, then replicates asynchronously to the mothership when connectivity is available.</p>
      </article>
    </div>

    <div class="architecture-flow">
      <div class="architecture-flow__item">
        <span>1</span>
        <strong>Provision</strong>
        <p>Define the fleet and push the initial configuration.</p>
      </div>
      <div class="architecture-flow__item">
        <span>2</span>
        <strong>Coordinate</strong>
        <p>Monitor edge hosts, adjust settings, and keep changes consistent.</p>
      </div>
      <div class="architecture-flow__item">
        <span>3</span>
        <strong>Stream</strong>
        <p>Keep data local, then replicate upstream when the network cooperates.</p>
      </div>
    </div>

    <div class="architecture-actions cta-actions">
      <a class="btn" href="{{ '/benchmarks/' | relative_url }}">View Benchmarks →</a>
      <a class="btn-outline" href="{{ '/contact/' | relative_url }}">Talk to Us →</a>
    </div>
  </div>
</section>
