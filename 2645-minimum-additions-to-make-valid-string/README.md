<h2><a href="https://leetcode.com/problems/minimum-additions-to-make-valid-string/">2645. Minimum Additions to Make Valid String</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>word</code> to which you can insert letters "a", "b" or "c" anywhere and any number of times, return <em>the minimum number of letters that must be inserted so that <code>word</code> becomes <strong>valid</strong>.</em></p>

<p>A string is called <strong>valid </strong>if it can be formed by concatenating the string "abc" several times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> word = "b"
<strong>Output:</strong> 2
<strong>Explanation:</strong> Insert the letter "a" right before "b", and the letter "c" right next to "a" to obtain the valid string "<strong>a</strong>b<strong>c</strong>".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> word = "aaa"
<strong>Output:</strong> 6
<strong>Explanation:</strong> Insert letters "b" and "c" next to each "a" to obtain the valid string "a<strong>bc</strong>a<strong>bc</strong>a<strong>bc</strong>".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> word = "abc"
<strong>Output:</strong> 0
<strong>Explanation:</strong> word is already valid. No modifications are needed. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 50</code></li>
	<li><code>word</code> consists of letters "a", "b"&nbsp;and "c" only.&nbsp;</li>
</ul>
</div>