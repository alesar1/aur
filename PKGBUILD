# Maintainer: Sid <sidpranjale127@protonmail.com>
# Continuing the work of:
# Maintainer: Jan Cholasta <jan at cholasta net>

pkgname=nblood-git
pkgver=r12715.b90417ed
pkgrel=1
pkgdesc='Blood port based on EDuke32 (git version)'
arch=('i686' 'x86_64' 'aarch64')
url='http://nukeykt.retrohost.net/'
license=('GPL' 'custom:BUILD')
depends=('flac'
         'glu'
         'gtk2'
         'libgl'
         'libogg'
         'libvorbis'
         'sdl2'
         'sdl2_mixer'
         'timidity++')
makedepends=('git' 'imagemagick')
makedepends_i686=('nasm')
optdepends=('blood-demo')
provides=('nblood')
conflicts=('nblood')
source=('git+https://github.com/nukeykt/NBlood.git'
        'nblood.desktop')
sha256sums=('SKIP'
            '58807697e95e071a6354f87e8e2fdae9f32af0e08dad1a510a0089845df42184')

pkgver() {
    cd NBlood
    echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
    cd NBlood
    make PACKAGE_REPOSITORY=1
    MAGICK_OCL_DEVICE=OFF convert \
        source/blood/rsrc/game.bmp \
        -gravity center \
        -crop 200x200+0+0 \
        -rotate 90 \
        -resize 192x192 \
        nblood.png
}

package() {
    cd NBlood
    install -D -t "$pkgdir"/usr/bin nblood
    install -D -t "$pkgdir"/usr/share/games/nblood -m 644 nblood.pk3
    install -D -t "$pkgdir"/usr/share/licenses/$pkgname -m 644 package/common/buildlic.txt
    install -D -t "$pkgdir"/usr/share/applications -m 644 "$srcdir"/nblood.desktop
    install -D -t "$pkgdir"/usr/share/icons/hicolor/192x192/apps -m 644 nblood.png
    echo "Place your game files in ~/.config/nblood"
}
