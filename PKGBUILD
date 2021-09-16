# Maintainer: Simon Weald <simon[at]simonweald[dot]com>

pkgname=kubefwd-bin
_srcname=kubefwd
pkgdesc="kubefwd is a command line utility built to port forward some or all pods within a Kubernetes namespace."
pkgver=1.21.0
pkgrel=1
arch=('x86_64')
url="https://github.com/txn2/kubefwd"
license=('apache')
source=("${_srcname}-${pkgver}.tar.gz::https://github.com/txn2/kubefwd/releases/download/${pkgver}/kubefwd_Linux_x86_64.tar.gz")
sha256sums=('6277f6d79c98af7fefad5a5524c5867c55588392aef699d63e0706640e265948')

package() {
    cd ${srcdir}
    tar -xzf ${_srcname}-${pkgver}.tar.gz
    install -Dm755 "${srcdir}/${_srcname}" "${pkgdir}/usr/bin/${_srcname}"
}
