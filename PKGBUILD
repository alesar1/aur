# Maintainer: Lenovsky <lenovsky@pm.me>

pkgname=telegram-desktop-git
pkgver=1.2.17.r1.gcf9802517
pkgrel=1
pkgdesc="Official desktop version of Telegram messaging app (dev branch)"
arch=('i686' 'x86_64')
url="https://desktop.telegram.org/"
license=('GPL3')
depends=('ffmpeg' 'hicolor-icon-theme' 'minizip' 'openal' 'qt5-base' 'qt5-imageformats' 'openssl')
makedepends=('cmake' 'gcc7' 'git' 'gyp' 'range-v3' 'python' 'libappindicator-gtk3')
optdepends=('libnotify: desktop notifications')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("tdesktop::git+https://github.com/telegramdesktop/tdesktop.git#branch=dev"
        "GSL::git+https://github.com/Microsoft/GSL.git"
        "libtgvoip::git+https://github.com/telegramdesktop/libtgvoip.git"
        "variant::git+https://github.com/mapbox/variant.git"
        "Catch::git+https://github.com/philsquared/Catch"
        "CMakeLists.inj::https://git.archlinux.org/svntogit/community.git/plain/trunk/CMakeLists.inj?h=packages/telegram-desktop"
        "tdesktop.patch::https://git.archlinux.org/svntogit/community.git/plain/trunk/tdesktop.patch?h=packages/telegram-desktop"
        "libtgvoip.patch::https://git.archlinux.org/svntogit/community.git/plain/trunk/libtgvoip.patch?h=packages/telegram-desktop"
        "no-gtk2.patch::https://git.archlinux.org/svntogit/community.git/plain/trunk/no-gtk2.patch?h=packages/telegram-desktop")
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '7a06af83609168a8eaec59a65252caa41dcd0ecc805225886435eb65073e9c82'
            'aea18527d47228dcdb42b8c1d74398fcf0fdcd7b3c2246e87198f8d9b2dfe0bc'
            '4dd2b1674b1a5bcfc5b640612278fe3a53b454192fbcc06b7476ff54ed6d2f6d'
            '8d707debe027c7cb658825501dc30fb3beb57ab21b1b6df2f01c5f76ca39a0e6')
pkgver() {
    cd "$srcdir/tdesktop"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "$srcdir/tdesktop"
    git submodule init
    git config submodule.Telegram/ThirdParty/GSL.url "$srcdir/GSL"
    git config submodule.Telegram/ThirdParty/variant.url "$srcdir/variant"
    git config submodule.Telegram/ThirdParty/libtgvoip.url "$srcdir/libtgvoip"
    git config submodule.Telegram/ThirdParty/Catch.url "$srcdir/Catch"
    git submodule update

    patch -Np1 -i "$srcdir/tdesktop.patch"
    patch -Np1 -i "$srcdir/no-gtk2.patch"

    cd "Telegram/ThirdParty/libtgvoip"
    patch -Np1 -i "$srcdir/libtgvoip.patch"
}

build() {
    cd "$srcdir/tdesktop"
    export CC=gcc-7
    export CXX=g++-7
    export ASM=gcc-7
    export LANG=en_US.UTF-8
    export GYP_DEFINES="TDESKTOP_DISABLE_CRASH_REPORTS,TDESKTOP_DISABLE_AUTOUPDATE,TDESKTOP_DISABLE_REGISTER_CUSTOM_SCHEME,TDESKTOP_DISABLE_UNITY_INTEGRATION"
    export EXTRA_FLAGS="-Winvalid-pch"
    export CPPFLAGS="$CPPFLAGS $EXTRA_FLAGS"
    export CXXFLAGS="$CXXFLAGS $EXTRA_FLAGS"
    gyp \
        -Dbuild_defines=${GYP_DEFINES} \
        -Gconfig=Release \
        --depth=Telegram/gyp --generator-output=../.. -Goutput_dir=out Telegram/gyp/Telegram.gyp --format=cmake
    NUM=$((`wc -l < out/Release/CMakeLists.txt` - 2))
    sed -i "$NUM r ../CMakeLists.inj" out/Release/CMakeLists.txt
    cd "$srcdir/tdesktop/out/Release"
    cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release
    make
}

package() {
    install -dm755 "$pkgdir/usr/bin"
    install -m755 "$srcdir/tdesktop/out/Release/Telegram" "$pkgdir/usr/bin/telegram-desktop"

    install -d "$pkgdir/usr/share/applications"
    install -m644 "$srcdir/tdesktop/lib/xdg/telegramdesktop.desktop" "$pkgdir/usr/share/applications/telegramdesktop.desktop"

    install -d "$pkgdir/usr/share/kservices5"
    install -m644 "$srcdir/tdesktop/lib/xdg/tg.protocol" "$pkgdir/usr/share/kservices5/tg.protocol"

    local icon_size icon_dir
    for icon_size in 16 32 48 64 128 256 512; do
    icon_dir="$pkgdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps"

    install -d "$icon_dir"
    install -m644 "$srcdir/tdesktop/Telegram/Resources/art/icon${icon_size}.png" "$icon_dir/telegram.png"
done
}
