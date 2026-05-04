---
title: Deployment Modes
permalink: /modes/
description: "LeafCuttr deploys in gateway or sidecar modes depending on whether the edge needs fan-in, local resilience, or embedded operation."
---

<section class="section modes-section">
  <div class="section-shell modes-shell">
    <div class="modes-hero">
      <p class="modes-eyebrow">Deployment</p>
      <h2>Choose the shape that fits the edge</h2>
      <p class="section-lead">LeafCuttr can run as a shared edge gateway, a sidecar beside your workload, or an agent journal layer for autonomous systems.</p>
    </div>

    <div class="modes-grid">
      <article class="card mode-card mode-card--featured">
        <div class="mode-card__header">
          <span class="mode-tag">Gateway / Mesh Mode</span>
          <span class="mode-card__badge">Best for fan-in</span>
        </div>
        <h3>Distributed edge clusters with high fan-in</h3>
        <p>Many devices converge on a shared edge broker with automatic failover between nodes.</p>
        <ul class="mode-list">
          <li>Shared broker for multiple devices and applications</li>
          <li>Automatic failover between edge nodes</li>
          <li>Good fit for constrained sites with local aggregation</li>
        </ul>
        <p class="mode-footnote"><strong>Use cases:</strong> Manufacturing, smart buildings, retail POS, and surveillance.</p>
      </article>

      <article class="card mode-card">
        <div class="mode-card__header">
          <span class="mode-tag">Sidecar / Embedded Mode</span>
          <span class="mode-card__badge">Best for low overhead</span>
        </div>
        <h3>Runs alongside your application or device</h3>
        <p>Single-node, low-overhead deployment that keeps the broker close to the workload.</p>
        <ul class="mode-list">
          <li>Single-node and lightweight by design</li>
          <li>Close to the workload for low latency</li>
          <li>Simple to embed where the data is created</li>
        </ul>
        <p class="mode-footnote"><strong>Use cases:</strong> Smart appliances, telematics, connected vehicles, robotics, and heavy machinery.</p>
      </article>
    </div>

    <div class="mode-spotlight card">
      <div class="mode-spotlight__content">
        <span class="mode-tag">Agentic Sidecar</span>
        <h3>Agent Journal Pattern</h3>
        <p>LeafCuttr can sit beside autonomous systems as an Agent Journal sidecar, preserving audit trails, decision evaluations, and asynchronous agent-to-agent communication.</p>
      </div>
      <div class="mode-spotlight__note">
        <strong>Use when</strong>
        <p>You need a structured sidecar around autonomous or agentic workflows.</p>
      </div>
    </div>

    <div class="modes-actions cta-actions">
      <a class="btn" href="{{ '/architecture/' | relative_url }}">See Architecture →</a>
      <a class="btn-outline" href="{{ '/contact/' | relative_url }}">Contact →</a>
    </div>
  </div>
</section>
