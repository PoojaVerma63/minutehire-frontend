import { Component, ViewEncapsulation } from '@angular/core';
import { CtaComponent } from '../shared/ui';

@Component({
  selector: 'app-article-single', standalone: true, imports: [CtaComponent], encapsulation: ViewEncapsulation.None,
  template: `
  <section class="hl-wrap as">
    <h1>Hiring Made Simple with Our New AI-Powered Candidate</h1>
    <div class="meta"><span class="who"><span class="av2"></span>Linckon Jessi</span><span>Date: <b>Jun 5, 2025</b></span></div>
    <div class="ph" style="--img:url(assets/img/article-1.jpg)"></div>
    <div class="abody">
      <div class="soc">Socials<div>Behance <span>•</span> Dribbble <span>•</span> Facebook</div></div>
      <div class="txt">
        <p>Let's face it—hiring can be hard. Between sifting through resumes, coordinating interviews, and trying to find that perfect match, recruiting top talent often feels like finding a needle in a haystack. That's why we're excited to introduce a smarter, faster, and more efficient way to hire: our new AI-powered candidate matching system.</p>
        <h3>Why We Built It</h3>
        <p>Hiring managers and recruiters have long faced a common set of challenges:</p>
        <ul><li>Sorting through hundreds (if not thousands) of resumes</li><li>Identifying candidates who are not just qualified on paper, but genuinely aligned with the role and company culture</li><li>Reducing time-to-hire while maintaining quality</li></ul>
        <h3>How It Works</h3>
        <p>Our AI-powered candidate matching uses machine learning and natural language processing to analyze both job descriptions and candidate profiles at scale. It doesn't just look for keywords—it understands context, experience relevance, and even soft skills.</p>
        <h5>Smart Matching:</h5><p>The AI ranks candidates based on skills, experience, and cultural fit, not just keyword hits.</p>
        <h5>Bias Reduction:</h5><p>By focusing on qualifications and competencies, the AI helps reduce unconscious bias.</p>
        <h5>Real-Time Recommendations</h5><p>As soon as a job is posted, the system automatically surfaces the most relevant candidates.</p>
        <div class="qb">“ Whether you're scaling a startup or building out an enterprise team, we're here to help you find your next great hire—without the hassle”</div>
        <h3>Real Results, Real Impact</h3>
        <p>Whether you're a recruiter, a hiring manager, or a business owner trying to grow your team, this tool is designed to make your life easier. Faster shortlisting means reduced time-to-hire. Higher-quality matches lead to better interviews and stronger hires. Streamlined processes free up your time for what matters most—building relationships and growing your business.</p>
        <p>Hiring shouldn't be a bottleneck—it should be a strategic advantage. With our AI-powered candidate matching, you can spend less time searching and more time hiring the right people.</p>
      </div>
    </div>
  </section>
  <app-cta />`
})
export class ArticleSingleComponent {}
