# Maintainer: Carlos Bellino <carlosbellino@gmail.com>

pkgname=pymedusa
_gitname=Medusa
_gitauthor=pymedusa
_pymedusa_dir="/opt/medusa"
pkgver=0.2.9
pkgrel=1
pkgdesc="Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic."
arch=('any')
url="https://github.com/${_gitauthor}/${_gitname}"
license=('GPL')

depends=('python2-babel'
         'python2-cheetah'
         'python2-mako')

optdepends=('python2-notify'
            'unrar')

conflicts=(${_pkgname}
           'sickbeard'
           'sickrage'
           'sickrage-git'
           'sickrage2-git'
           'sickgear-git')

options=('!strip')
install=${pkgname}.install

source=("https://github.com/${_gitauthor}/${_gitname}/archive/v${pkgver}.tar.gz"
        "${pkgname}.service"
        "${pkgname}.install")

md5sums=('7dbcdd743100ca33b31e3e444bc23209'
         '2438a763cb60aa1e507d60de802ac7f2'
         '376fc90d3855b4bbc00da9a81273d410')

package() {
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  install -dm755 "${pkgdir}${_pymedusa_dir}"/{app,data}

  cp -rp "${srcdir}/${_gitname}-${pkgver}"/* "${pkgdir}${_pymedusa_dir}"/app/
}
