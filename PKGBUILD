# Maintainer: Tomas Kral <tomas.kral@gmail.com>
# Contributor: Sergi Jimenez <sjr@redhat.com>

pkgname=minishift-bin
_minishift_version=1.23.0
pkgver=${_minishift_version//-/_}
pkgrel=1
pkgdesc="Tool that makes it easy to run OpenShift locally."
url="https://github.com/minishift/minishift"
license=('Apache')
arch=('x86_64')
makedepends=()
provides=('minishift')

optdepends=(
  'virtualbox: to use minishift with VirtualBox virtualization'
  'docker-machine-kvm: to use minishisft with KVM virtualization'
)

source=(https://github.com/minishift/minishift/releases/download/v${_minishift_version}/minishift-${_minishift_version}-linux-amd64.tgz)
sha256sums=('cb33eb0b75012d83ac712ea60f2aff07b9b510fac3e1f485ab6212e52a674943')


prepare() {
    tar -xf minishift-${_minishift_version}-linux-amd64.tgz
}

package() {
  install -Dm755 "${srcdir}/minishift-${_minishift_version}-linux-amd64/minishift" "${pkgdir}/usr/bin/minishift"
  install -Dm644 "${srcdir}/minishift-${_minishift_version}-linux-amd64/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
