export default function PeopleAnalytics() {
  return (
    <>
      <section className="section people-analytics" id="dashboard" dangerouslySetInnerHTML={{ __html: String.raw`<div class="container">
          <div class="analytics-showcase-grid">
            <article class="analytics-showcase reveal">
              <header>
                <h2>Productivity Analytics</h2>
                <p>
                  Track employee productivity and identify opportunities for
                  improvement.
                </p>
              </header>
              <div class="analytics-preview productivity-preview">
                <div class="analytics-preview-top">
                  <span><small>Productive hours</small><b>3374:50</b><em>+8.4% vs last month</em></span>
                  <span class="alert"><small>Non-productive hours</small><b>162:46</b><em>-12.1% improvement</em></span>
                </div>
                <div class="dashboard-chart productivity-chart" aria-label="Weekly productive and non-productive hours">
                  <div class="chart-grid" aria-hidden="true"></div>
                  <div class="stacked-bars">
                    <span style="--productive: 68%; --nonproductive: 16%"><b>Mon</b></span>
                    <span style="--productive: 74%; --nonproductive: 13%"><b>Tue</b></span>
                    <span style="--productive: 81%; --nonproductive: 10%"><b>Wed</b></span>
                    <span style="--productive: 76%; --nonproductive: 12%"><b>Thu</b></span>
                    <span style="--productive: 88%; --nonproductive: 8%"><b>Fri</b></span>
                  </div>
                  <div class="chart-legend">
                    <span><i class="productive-dot"></i>Productive</span>
                    <span><i class="alert-dot"></i>Non-productive</span>
                  </div>
                </div>
              </div>
            </article>
            <article class="analytics-showcase reveal delay-1" id="reports">
              <header>
                <h2>Performance Overview</h2>
                <p>
                  Measure employee performance and productivity trends.
                </p>
              </header>
              <div class="analytics-preview performance-preview">
                <div class="analytics-preview-top">
                  <span><small>Monthly productivity</small><b>95.8%</b><em>Target 94%</em></span>
                  <span class="warm"><small>Avg non-productive</small><b>1.38 hrs</b><em>Per employee</em></span>
                </div>
                <div class="dashboard-chart performance-chart" aria-label="Performance score trend">
                  <svg viewBox="0 0 320 188" role="img" aria-labelledby="performanceChartTitle">
                    <title id="performanceChartTitle">Performance overview trend rising from 86% to 96%</title>
                    <path class="chart-area" d="M24 142 L78 124 L132 132 L186 88 L240 98 L296 54 L296 164 L24 164 Z"></path>
                    <path class="chart-line-main" d="M24 142 L78 124 L132 132 L186 88 L240 98 L296 54"></path>
                    <path class="chart-line-secondary" d="M24 154 L78 148 L132 139 L186 126 L240 118 L296 106"></path>
                    <g class="chart-points">
                      <circle cx="24" cy="142" r="4"></circle>
                      <circle cx="78" cy="124" r="4"></circle>
                      <circle cx="132" cy="132" r="4"></circle>
                      <circle cx="186" cy="88" r="4"></circle>
                      <circle cx="240" cy="98" r="4"></circle>
                      <circle cx="296" cy="54" r="4"></circle>
                    </g>
                  </svg>
                  <div class="chart-legend">
                    <span><i class="productive-dot"></i>Score</span>
                    <span><i class="muted-dot"></i>Target</span>
                  </div>
                </div>
              </div>
            </article>
            <article class="analytics-showcase reveal delay-2">
              <header>
                <h2>Executive Dashboard</h2>
                <p>Get real-time insights into key employee metrics.</p>
              </header>
              <div class="analytics-preview executive-preview">
                <div class="mini-kpis">
                  <span><small>Total employees</small><b>102</b></span>
                  <span><small>Present today</small><b>90</b></span>
                  <span><small>Late arrivals</small><b>4</b></span>
                  <span><small>Productivity</small><b>95.8%</b></span>
                </div>
                <div class="dashboard-chart executive-chart-preview" aria-label="Executive workforce dashboard summary">
                  <div class="executive-donut" style="--value: 88%">
                    <b>88%</b>
                    <small>Attendance</small>
                  </div>
                  <div class="executive-bars">
                    <span style="--value: 96%"><b>Productivity</b><i></i><em>95.8%</em></span>
                    <span style="--value: 88%"><b>Attendance</b><i></i><em>88%</em></span>
                    <span class="warn" style="--value: 18%"><b>Late arrivals</b><i></i><em>4</em></span>
                    <span class="alert" style="--value: 7%"><b>Open gaps</b><i></i><em>7%</em></span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>` }} />
    </>
  );
}
