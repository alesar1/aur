# $Id$
# Contributor: Paul Nicholson <brenix@gmail.com>

_name=kustomize
pkgname=kustomize-bin
pkgver=1.0.5
pkgrel=1
pkgdesc="Customization of Kubernetes YAML configurations"
arch=('x86_64')
url="https://github.com/kubernetes-sigs/kustomize"
license=('Apache')
source=("https://github.com/kubernetes-sigs/${_name}/releases/download/v${pkgver}/${_name}_${pkgver}_linux_amd64")
sha256sums=('8959c22cced9c47be1e31e3dba3c22d9bbe9e812a4e843555127f5f3ee160871')

package() {
  cd "${srcdir}"
  install -Dm755 ${_name}_${pkgver}_linux_amd64 ${pkgdir}/usr/bin/${_name}
}
