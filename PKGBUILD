# Maintainer: wicastC <wicastchen at hotmail.com>

pkgname=flamegraph-git
pkgver=r174.4d7e64e
pkgrel=1
pkgdesc="stack trace visualizer"
arch=('any')
url="http://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html"
license=('CDDL')
depends=('perl' 'awk')
makedepends=('git')
provides=('flamegraph')
conflicts=('flamegraph')
source=(${pkgname}::"git+https://github.com/brendangregg/FlameGraph")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}


package() {
  cd "$srcdir/$pkgname"
  install -Dm755 difffolded.pl "${pkgdir}/usr/bin/difffolded"
	install -Dm755 flamegraph.pl "${pkgdir}/usr/bin/flamegraph"
  install -Dm755 stackcollapse-elfutils.pl "${pkgdir}/usr/bin/stackcollapse-elfutils"
  install -Dm755 stackcollapse-gdb.pl "${pkgdir}/usr/bin/stackcollapse-gdb"
  install -Dm755 stackcollapse-instruments.pl "${pkgdir}/usr/bin/stackcollapse-instruments"
  install -Dm755 stackcollapse-jstack.pl "${pkgdir}/usr/bin/stackcollapse-jstack"
  install -Dm755 stackcollapse-ljp.awk "${pkgdir}/usr/bin/stackcollapse-ljp"
  install -Dm755 stackcollapse-perf.pl "${pkgdir}/usr/bin/stackcollapse-perf"
  install -Dm755 stackcollapse.pl "${pkgdir}/usr/bin/stackcollapse"
  install -Dm755 stackcollapse-pmc.pl "${pkgdir}/usr/bin/stackcollapse-pmc"
  install -Dm755 stackcollapse-recursive.pl "${pkgdir}/usr/bin/stackcollapse-recursive"
  install -Dm755 stackcollapse-vtune.pl "${pkgdir}/usr/bin/stackcollapse-vtune"

  install -Dm644 docs/cddl1.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
