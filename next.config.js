/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  cleanDistDir: true,
  poweredByHeader: false,
  generateEtags: false,
  compress: false,
  productionBrowserSourceMaps: false,
  optimizeFonts: false,
  swcMinify: false,
  compiler: {
    removeConsole: true,
  },
  experimental: {
    disableOptimizedLoading: true,
    browsersListForSwc: false,
    legacyBrowsers: false,
    optimizeCss: false,
    scrollRestoration: false,
    gzipSize: false,
    craCompat: false,
    esmExternals: false,
    isrMemoryCacheSize: 0,
    workerThreads: false,
    pageEnv: false,
    optimisticClientCache: false,
    webVitalsAttribution: false,
  }
}
