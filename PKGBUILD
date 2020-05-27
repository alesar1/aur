# Maintainer: Silvio Ankermann < silvio at booq dot org >

pkgname=git-annex-remote-googledrive
pkgver=1.0.1
pkgrel=1
pkgdesc='Faster git-annex special remote for Google Drive with support for exports'
url='https://github.com/Lykos153/git-annex-remote-googledrive'
license=('GPLv3+')
arch=('any')
depends=('git-annex' 'python-annexremote' 'python-drivelib' 'python-tenacity' 'python-gitpython')
makedepends=('python-setuptools')
source=("https://github.com/Lykos153/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('81769e465114c7dbf76a7503e1940096cfab04b4dd3a2ea22c2bd66fd3382d19')



package() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    python setup.py install --optimize=1 "--root=${pkgdir}"
}
