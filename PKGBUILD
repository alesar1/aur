# Maintainer: Vitaly Utkin <vautkin AT teknik DOT io>
pkgname=ovras
pkgver=5.3.1
pkgrel=1
epoch=0
pkgdesc="Advanced settings and custom behavior for SteamVR using OpenVR (OVR)."
arch=("x86_64")
url="https://github.com/OpenVR-Advanced-Settings/OpenVR-AdvancedSettings"
license=("GPL")
depends=("qt5-declarative"
         "qt5-multimedia"
         "libudev0-shim"
         "mesa")
optdepends=("dbus: media player support"
            "xorg-server: send keyboard keys"
            "pulseaudio: pulse audio support")
source=("https://github.com/OpenVR-Advanced-Settings/OpenVR-AdvancedSettings/archive/v$pkgver.tar.gz")
sha256sums=("4f9fca842d13e939c844c7ed94a14706194254b09f49b2ce5a30e6a7510d62ab")

build() {
    cd "OpenVR-AdvancedSettings-$pkgver"

    _additionalOptions=

    # Attempting to compile without package will result in compile error
    pacman -Qi xorg-server >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        _additionalOptions="CONFIG+=noX11"
        echo "X11 features disabled."
    else
        echo "X11 features enabled."
    fi

    # Attempting to compile without package will result in compile error
    pacman -Qi dbus >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        _additionalOptions+=" CONFIG+=noDBUS"
        echo "DBUS features disabled."
    else
        echo "DBUS features enabled."
    fi

    # Attempting to compile without package will result in compile error
    pacman -Qi pulseaudio >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        _additionalOptions+=" CONFIG+=noPulse"
        echo "Pulse features disabled."
    else
        echo "Pulse features enabled."
    fi

    # Turn off warnings as errors
    sed -i 's/QMAKE_CXXFLAGS += -Werror//' build_scripts/qt/compilers/gcc.pri
    sed -i 's/QMAKE_CXXFLAGS += -Werror//' build_scripts/qt/compilers/clang.pri

    qmake PREFIX="$pkgdir/opt/" $_additionalOptions
    make
}

package() {
    cd "OpenVR-AdvancedSettings-$pkgver"

    # Add .desktop file
    mkdir -p "$pkgdir/usr/share/applications"
    cp "src/package_files/linux/AdvancedSettings.desktop" "$pkgdir/usr/share/applications/"
    sed -i 's/Exec=.*/Exec=\/opt\/AdvancedSettings\/AdvancedSettings/' "$pkgdir/usr/share/applications/AdvancedSettings.desktop"

    # Add correct desktop icon to desktop file
    sed -i 's/Icon=.*/Icon=\/opt\/AdvancedSettings\/AdvancedSettings.png/' "$pkgdir/usr/share/applications/AdvancedSettings.desktop"
    # Dir doesn't exist before `make install`
    mkdir -p "$pkgdir/opt/AdvancedSettings/"
    cp "src/res/img/icons/thumbicon.png" "$pkgdir/opt/AdvancedSettings/AdvancedSettings.png"

    # Make program use correct working dir
    echo "Path=/opt/AdvancedSettings" >> "$pkgdir/usr/share/applications/AdvancedSettings.desktop"

    # Enable command line usage
    mkdir -p "$pkgdir/usr/bin/"
    ln -s /opt/AdvancedSettings/AdvancedSettings "$pkgdir/usr/bin/ovras"

    # Install
    make install
}
