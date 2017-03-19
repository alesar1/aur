# Maintainer: Franklyn Tackitt <franklyn@tackitt.net>
# Maintainer: Christian Höppner <chris@mkaito.com>
pkgname=drone-cli
pkgver=0.5
pkgrel=2
pkgdesc='Drone.ci command line utility'
arch=('x86_64')
url='http://readme.drone.io/cli/'
license=('Apache 2.0')
depends=('docker')
source=('http://downloads.drone.io/release/linux/amd64/drone.tar.gz'
        'https://raw.githubusercontent.com/drone/drone-cli/master/LICENSE')
sha256sums=('f6ea4355779da52dc96f573ffba850abedb598b4063a3764b4f573e8d46ce793'
            'cb5e8e7e5f4a3988e1063c142c60dc2df75605f4c46515e776e3aca6df976e14')

package() {
  mkdir -p "${pkgdir}/usr/bin/"
  mkdir -p "${pkgdir}/usr/share/licenses/drone/"
  install -Dm755 drone ${pkgdir}/usr/bin/drone
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/drone/LICENSE
}
