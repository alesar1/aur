# Maintainer: Kyle Manna <kyle[at]kylemanna[d0t]com>
pkgname=backblaze-b2
pkgver=1.2.0
pkgrel=1
pkgdesc="Backblaze B2 Command Line Client"
url="https://www.backblaze.com/b2/cloud-storage.html"
depends=('python2'
         'python2-arrow>=0.8.0'
         'python2-logfury>=0.1.2'
         'python2-requests>=2.9.1'
         'python2-tqdm>=4.5.0'
         'python2-six>=1.10'
         'python2-futures>=3.0.5'
        )
optdepends=()
# MIT or Creative Commons: https://www.backblaze.com/using_b2_code.html
license=('MIT')
arch=('any')

# Need a better source URL at some point
source=("https://github.com/Backblaze/B2_Command_Line_Tool/archive/v${pkgver}.tar.gz")
sha512sums=('24b1845842318f93657321454ff0e292a4912ac84986b84a502800482b00ea6aabf5b3fca931651de2a3fe0ae82a94eb223340a5d186bb6e835b5148c3514105')

build() {
    cd ${srcdir}/B2_Command_Line_Tool-${pkgver}
    python2 setup.py build
}

package() {
    cd ${srcdir}/B2_Command_Line_Tool-${pkgver}
    python2 setup.py build
    python2 setup.py install --root="$pkgdir" --optimize=1

    # https://wiki.archlinux.org/index.php/Python_package_guidelines
    rm -rf ${pkgdir}/usr/lib/python*/site-packages/tests/

    # Installed to backblaze-b2 because the Boost pkg installs /usr/bin/b2
    mv ${pkgdir}/usr/bin/b2 ${pkgdir}/usr/bin/backblaze-b2
}

