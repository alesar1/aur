# Maintainer: Coelacanthus <coelacanthus@outlook.com>
# Contributor: Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Contributor: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>
# Contributor: Christoph Zeiler <rabyte@gmail.com>

pkgname=onscripter
pkgver=20200722
pkgrel=4
pkgdesc="A game engine compatible to NScripter, to create and perform visual novel games"
arch=('i686' 'x86_64')
url="http://onscripter.sourceforge.jp/onscripter.html"
license=('GPL')
depends=('sdl_image'
         'sdl_mixer'
         'sdl_ttf'
         'sdl_sound'
         'lua51'
         'fontconfig'
         'libjpeg'
         'bzip2'
         'smpeg'
         'cmake'
         'ninja'
         )
source=("http://onscripter.sourceforge.jp/${pkgname}-${pkgver}.tar.gz"
        'CMakeLists.txt'
        '0001-fix-smpeg-header-name.patch'
        '0002-fix-lua-header-name.patch'
        )

b2sums=('5dbd734e5ca577e75cb51ef06018f0d6b862f1b13d913dc8e400a0725a22c8cca516e68432527c6c8ef62dc72fdc8985deb0ea63bcbb29386cac855bd8e4a3c0'
        'cc3bed346cd899a1b1dcd13da64559d2d794219b55e41d864ab1e5d69ae55d1b12e71f5c4930cb9d9b24ddb3ae24c4dae060513a7eebd2c28754595431f7ad82'
        '844669f2d20bfa4111b966286c60940008d42afa0eff64396cd48267cdfb4e90470d25269bdca6311e09fbd770360d1771e6ee62133563146ed0e5dcb1f459c7'
        '050d46bcac811af57ad9cec046a975abf70e01429d4517dad2cea32e1dc5d19b5b8831acbda834ef126249794a251097beaa6b34539f4e6ecac2d8522bf45222')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ln -s ${srcdir}/CMakeLists.txt
    patch -p1 -i ${srcdir}/0001-fix-smpeg-header-name.patch
    patch -p1 -i ${srcdir}/0002-fix-lua-header-name.patch
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
	cmake . \
		-DCMAKE_BUILD_TYPE=Release \
		-GNinja \
		-DCMAKE_INSTALL_PREFIX=${pkgdir}/usr
	ninja
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	ninja install
}
