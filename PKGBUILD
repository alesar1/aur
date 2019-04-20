# Author: lilydjwg <lilydjwg@gmail.com>
# Contributor: C. N. Hsing
pkgname=wait-online-git
pkgver=0.r14.2ba4f71
pkgrel=1
pkgdesc="Tools to wait for Internet reachability (HTTP 204), useful if behind a captive portal"
arch=('any')
license=("GPL3")
makedepends=('git')
depends=('python-systemd')
conflicts=('wait-online')
source=(git+https://github.com/lilydjwg/wait-online.git)
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-*}"
  printf "0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  true
}

package() {
  cd "$srcdir/${pkgname%-*}"
  install -Dm755 wait-online "${pkgdir}/usr/bin/wait-online"
  install -Dm755 check-online "${pkgdir}/usr/bin/check-online"
  install -Dm644 wait-online.service "${pkgdir}/usr/lib/systemd/system/wait-online.service"
  install -Dm644 wait-online-onresume.service "${pkgdir}/usr/lib/systemd/system/wait-online-onresume.service"
  install -Dm644 tmpfiles.conf "${pkgdir}/usr/lib/tmpfiles.d/${pkgname%-*}.conf"
  mkdir -p "${pkgdir}"/usr/lib/systemd/system/multi-user.target.wants
  ln -s ../network-online.target "${pkgdir}"/usr/lib/systemd/system/multi-user.target.wants
  install -Dm644 README.md "${pkgdir}"/usr/share/doc/"${pkgname%-*}"/README.md
}
