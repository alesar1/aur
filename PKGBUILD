# Maintainer: Philipp Jonczyk <p dot jonczyk at posteo dot de>
pkgname=python-daily-dozen
pkgver=1.4
pkgrel=1
pkgdesc="CLI tool to store your daily dozen of plant based essentials."
arch=('any')
url="https://github.com/randomn4me/daily-dozen-cli/"
license=('ISC')
depends=('python'
         'python-tabulate')
source=("daily-dozen.py")
provides=("python-daily-dozen=$pkgver-$pkgrel")
source=("https://github.com/randomn4me/${pkgname#python-}-cli/archive/${pkgver}.tar.gz")
md5sums=('df270a25638b40e0e88db3fd66595e72')

package() {
    cd "${pkgname#python-}-cli-${pkgver}"

    install -Dm755 "${srcdir}/${pkgname#python-}-cli-${pkgver}/daily-dozen.py" \
        "${pkgdir}/usr/bin/daily-dozen"

    install -Dm644 "${srcdir}/${pkgname#python-}-cli-${pkgver}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
