# Maintainer: Jean-Francois Chevrette <jfchevrette@gmail.com>
# Contributor: Matthew Ellison <matt+aur@arroyonetworks.com>

_pkgname='istio'
pkgname="${_pkgname}-bin"
pkgver=1.5.2
pkgrel=1
pkgdesc='An open platform to connect, manage, and secure microservices'
arch=('x86_64')
url='https://istio.io'
license=('Apache')
depends=('bash' 'glibc')
optdepends=()
makedepends=()
conflicts=("${_pkgname}")
source=("https://github.com/istio/istio/releases/download/${pkgver}/istio-${pkgver}-linux.tar.gz")
sha256sums=('0e32ac8af40b9edcb49a31b8f45df4f3a825a47fd2aa1ac114e93def73dc3c17')

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  install -Dm755 "bin/istioctl" "${pkgdir}/usr/bin/istioctl"
  install -Dm644 "tools/_istioctl" "${pkgdir}/usr/share/zsh/site-functions/_istioctl"
  install -Dm644 "tools/istioctl.bash" "${pkgdir}/usr/share/bash-completion/completions/istioctl"
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"

  install -d "${pkgdir}/usr/share/${_pkgname}"
  for d in install samples tools; do
    cp -R "${d}" "${pkgdir}/usr/share/${_pkgname}/"
  done
}
