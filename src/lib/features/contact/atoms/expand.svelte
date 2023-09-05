<div class="collapse collapse-arrow border border-1 border-r-0 border-l-0 rounded-none">
	<input type="radio" name="my-accordion-2" />
	<div class="collapse-title text-xl font-medium">
		<slot name="header" />
	</div>
	<div class="collapse-content">
		<slot name="content" />
	</div>
</div>
