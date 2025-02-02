<script lang="ts">
    import '../../app.css';
    let { children } = $props();
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        {@render children()}
    </div>
</div>