---
title: Benchmarks
permalink: /benchmarks/
description: "LeafCuttr delivers strong throughput, lower tail latency, and efficient operation on constrained hardware."
---

<section class="section benchmarks-page">
  <div class="section-shell benchmarks-shell">
    <div class="benchmarks-hero">
      <p class="benchmarks-eyebrow">Proof</p>
      <h2>Performance that fits the edge</h2>
      <p class="section-lead">LeafCuttr is tuned for constrained environments, from tmpfs throughput to fsync-heavy workloads where durability still matters.</p>
    </div>

    <div class="benchmarks-snapshot">
      <article class="card benchmark-snapshot-card">
        <span class="badge">Throughput</span>
        <div class="benchmark-snapshot__value">87.64</div>
        <p>MB/s on untuned producer workloads in tmpfs.</p>
      </article>
      <article class="card benchmark-snapshot-card">
        <span class="badge">Durability</span>
        <div class="benchmark-snapshot__value">32.53</div>
        <p>MB/s on tuned producer workloads with fsync enabled.</p>
      </article>
      <article class="card benchmark-snapshot-card">
        <span class="badge">Tail latency</span>
        <div class="benchmark-snapshot__value">933</div>
        <p>p999 for LeafCuttr on native sync mode in the supplementary comparison.</p>
      </article>
    </div>

    <div class="benchmarks-section">
      <div class="benchmarks-section__header">
        <h3>Throughput comparison</h3>
        <p>Higher bars indicate stronger write throughput. LeafCuttr is shown alongside Apache Kafka across tmpfs and fsync scenarios.</p>
      </div>
      <div class="bar-chart benchmark-chart" aria-label="Throughput comparison">
        {% for item in site.data.benchmarks.throughput %}
        <div class="bar-row">
          <div class="bar-label">{{ item.label }}</div>
          <div class="bar-track">
            <div class="bar-fill {{ item.type }}" data-width="{{ item.value | divided_by: 87.64 | times: 100 }}%"></div>
          </div>
          <div class="bar-value">{{ item.value }} MB/s</div>
        </div>
        {% endfor %}
      </div>
    </div>

    <div class="benchmarks-section">
      <div class="benchmarks-section__header">
        <h3>Supplementary comparison</h3>
        <p>Latency and throughput across container, native, and sync-mode runs.</p>
      </div>
      <div class="benchmark-table-wrap">
        <table class="bench-table">
          <thead>
            <tr>
              <th>Engine</th>
              <th>TP</th>
              <th>Avg Lat</th>
              <th>Max Lat</th>
              <th>p50</th>
              <th>p999</th>
            </tr>
          </thead>
          <tbody>
            {% for item in site.data.benchmarks.supplementary %}
            <tr{% if item.highlight %} class="highlight-{{ item.highlight }}"{% endif %}>
              <td>{{ item.label }}</td>
              <td>{{ item.tp }}</td>
              <td>{{ item.avg_lat }}</td>
              <td>{{ item.max_lat }}</td>
              <td>{{ item.p50 }}</td>
              <td>{{ item.p999 }}</td>
            </tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
    </div>

    <div class="benchmarks-note card">
      <h3>What this means</h3>
      <p>LeafCuttr is designed to outperform traditional Kafka in edge scenarios with better throughput, lower tail latency, and durability that still fits constrained hardware.</p>
    </div>

    <div class="benchmarks-actions cta-actions">
      <a class="btn" href="{{ '/architecture/' | relative_url }}">See Architecture →</a>
      <a class="btn-outline" href="{{ '/contact/' | relative_url }}">Contact →</a>
    </div>
  </div>
</section>
