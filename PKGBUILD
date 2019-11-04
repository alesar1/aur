# Maintainer: Henry78 <henry78@gmx.at>
# Mainteiner: Donald Webster <fryfrog@gmail.com>

pkgname=runrestic
pkgver=0.3.6
pkgrel=1
pkgdesc='A wrapper script for Restic backup software that inits, creates, prunes and checks backups'
arch=(any)
url='https://github.com/andreasnuesslein/runrestic'
license=('GPL3')
depends=('python'
         'python-toml'
         'python-jsonschema')

source=("runrestic-${pkgver}.tar.gz::https://github.com/andreasnuesslein/runrestic/archive/${pkgver}.tar.gz")
sha256sums=('4496f786351e81c0b72a050939e2bb19efd4a8363376a288ea95e55d668d91a3')

package() {
  cd "${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1

  sed -i 's%/usr/local%/usr%' sample/systemd/runrestic.service
  install -D -m 644 sample/systemd/runrestic.service ${pkgdir}/usr/lib/systemd/system/runrestic.service
  install -D -m 644 sample/systemd/runrestic.timer   ${pkgdir}/usr/lib/systemd/system/runrestic.timer
}
