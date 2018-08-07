# Maintainer: Shalygin Konstantin <k0ste@k0ste.ru>
# Contributor: Shalygin Konstantin <k0ste@k0ste.ru>

_limit='ipt-ratelimit'
pkgname='ipt_ratelimit'
pkgver='0.2'
pkgrel='7'
pkgdesc='Rate Policer as netfilter extension.'
arch=('any')
url="https://github.com/aabc/${_limit}"
license=('GPL')
depends=('linux' 'iptables')
makedepends=('gcc')
source=("${pkgname}.tar.gz::${url}/archive/v${pkgver}.tar.gz"
	"${_limit}-${pkgver}_OBS.patch"
	"${_limit}-${pkgver}_fix_race_condition.patch"
	"${_limit}-${pkgver}_cidr_support.patch"
	"${_limit}-${pkgver}_ipv6.patch")

sha256sums=('feb9a9bf002175b7fd73a3bbbd65e5e8bbc65a7fce217a7d36ec172c315a56c5'
            'b33e074c80aeb149786a9c395e47f01cd06eda6e94f44054fa81e5994270e2e3'
            '06cd7a1b902b9f4dfd98a1aa2114bdea5cc2e589bb395a69028d5effcaf655d2'
            '85684f4e86d13ea5f4997c2666d513c722630a0067d1191f132438b8ff2f6876'
            'fd824aae59f72b9ab738647bb1192ef7da155d19531e69e8e9e3bf19490a1b8c')
install="${pkgname}.install"
_linux_custom="ARCH"
_kdir="`pacman -Qe linux | awk '{print "/usr/lib/modules/"$2"-'${_linux_custom}'/"}' | sed 's|\.arch|\-arch|g'`"
_kver="`pacman -Qe linux | awk '{print $2"-'${_linux_custom}'"}' | sed 's|\.arch|\-arch|g'`"

prepare() {
  cd "${srcdir}/${_limit}-${pkgver}"

  # upstream patches
  local src
  for src in "${source[@]}"; do
    src="${src%%::*}"
    src="${src##*/}"
    [[ $src = *.patch ]] || continue
    msg2 "Applying patch $src..."
    patch -Np1 < "../$src"
  done
}

build() {
  cd "${srcdir}/${_limit}-${pkgver}"
  make KVER=${_kver} KDIR=${_kdir}build
}

check() {
  cd "${srcdir}/${_limit}-${pkgver}"
  gzip --best -c "xt_ratelimit.ko" > "xt_ratelimit.ko.gz"
}

package() {
  cd "${srcdir}/${_limit}-${pkgver}"
  install -Dm755 "libxt_ratelimit.so" "${pkgdir}/usr/lib/iptables/libxt_ratelimit.so"
  install -Dm644 "xt_ratelimit.ko.gz" "${pkgdir}${_kdir}/extra/xt_ratelimit.ko.gz"
  install -Dm644 "README" "${pkgdir}/usr/share/doc/${pkgname}/README"
  install -Dm644 "CREDITS" "${pkgdir}/usr/share/licenses/${pkgname}/CREDITS"
}
