---
title: Architecture
permalink: /architecture/
description: "LeafCuttr separates management, control, and data planes so edge streaming stays fast while fleet operations stay coordinated."
---

<section class="section architecture-section">
  <div class="section-shell architecture-shell">
    <div class="architecture-hero">
      <p class="architecture-eyebrow">System design</p>
      <h2>Separation without friction</h2>
      <p class="section-lead">Leafcuttr splits management, control, and data planes so edge workloads stay lean, operators stay in control, and data movement stays intentional.</p>
    </div>

    <div class="architecture-diagram card" aria-label="Leafcuttr architecture overview">
      <div class="architecture-diagram__row">
        <span class="architecture-diagram__label">Management</span>
        <div class="architecture-diagram__body">
          <strong>Console, Kubernetes Operator, API</strong>
          <span>Fleet provisioning, lifecycle actions, and configuration changes happen here.</span>
        </div>
        <span class="architecture-diagram__note">Coordinates the fleet</span>
      </div>
      <div class="architecture-diagram__connector" aria-hidden="true"></div>
      <div class="architecture-diagram__row">
        <span class="architecture-diagram__label">Control</span>
        <div class="architecture-diagram__body">
          <strong>Leafcuttr Controller + Leaf Monitor</strong>
          <span>Bootstrap, change management, and metrics flow over HTTP and WebSocket.</span>
        </div>
        <span class="architecture-diagram__note">Keeps the edge in sync</span>
      </div>
      <div class="architecture-diagram__connector" aria-hidden="true"></div>
      <div class="architecture-diagram__row">
        <span class="architecture-diagram__label">Data</span>
        <div class="architecture-diagram__body">
          <strong>Leafcuttr Server</strong>
          <span>Kafka, MQTT, and HTTP traffic stays local first, then replicates asynchronously when connectivity allows.</span>
        </div>
        <span class="architecture-diagram__note">Streams at the edge</span>
      </div>
    </div>

    <div class="architecture-grid">
      <article class="card architecture-card">
        <h3>Management Plane</h3>
        <p>The Console, Kubernetes Operator, and API coordinate fleet-level provisioning and lifecycle management without touching the data path.</p>
      </article>
      <article class="card architecture-card">
        <h3>Control Plane</h3>
        <p>The LeafCuttr Controller communicates with Leaf Monitor on each edge host over HTTP and WebSocket for bootstrap, configuration, change management, and metrics.</p>
      </article>
      <article class="card architecture-card">
        <h3>Data Plane</h3>
        <p>The LeafCuttr Server accepts Kafka, MQTT, and HTTP traffic at the edge, then replicates asynchronously to the mothership when connectivity is available.</p>
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
