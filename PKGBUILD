# Maintainer: Enmanuel Moreira <enmanuelmoreira@gmail.com>

pkgname=lima
pkgver=0.10.0
pkgrel=3
pkgdesc="Linux virtual machines, typically on macOS, for running containerd."
arch=('x86_64')
url="https://github.com/lima-vm/lima"
license=('MIT')
source=("https://github.com/lima-vm/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}-Linux-x86_64.tar.gz")
sha256sums=('7919d50dc5bc45e29a3fb90b4ae3e1bb5687d04dae06e329c7599adf17008acc')

package() {
  cp -r "${srcdir}" "${pkgdir}"/usr
  find $pkgdir -iname ${pkgname}-${pkgver}* | xargs -r rm -rf
}
