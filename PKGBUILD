# Maintainer: Karol 'Kenji Takahashi' Woźniak <kenji.sx>
# Contributor: Sébastien "Seblu" Luttringer
# Contributor: Ionut Biru <ibiru@archlinux.org>

pkgname=virtualbox-headless
pkgver=6.1.6
_tarver=${pkgver}
pkgrel=1
pkgdesc='Powerful x86 virtualization for enterprise as well as home use. Headless build (no GUI, no Java).'
arch=('i686' 'x86_64')
url='https://virtualbox.org'
license=('GPL' 'custom')
depends=('curl' 'libxml2' 'libvpx' 'libpng' 'python' 'opus')
makedepends=(
    'iasl' 'libxslt' 'cdrkit' 'libidl2' 'libpulse' 'device-mapper' 'libvncserver' 'gsoap' 'glu' 'lib32-gcc-libs'
)
optdepends=('vde2: Virtual Distributed Ethernet support'
            'virtualbox-guest-iso: Guest Additions CD image'
            'virtualbox-ext-vnc: VNC server support'
            'virtualbox-sdk: Developer kit')
backup=('etc/vbox/vbox.cfg')
provides=("virtualbox=${pkgver}")
replaces=('virtualbox-ose' 'virtualbox')
conflicts=('virtualbox-ose' 'virtualbox')
install=virtualbox.install
source=("https://download.virtualbox.org/virtualbox/${pkgver}/VirtualBox-${_tarver}.tar.bz2"
        'virtualbox.sysusers'
        '60-vboxdrv.rules'
        '60-vboxguest.rules'
        'LocalConfig.kmk'
        'vboxservice.service'
        'vboxservice-nox.service'
        'vboxweb.service'
        'vboxreload'
        '001-disable-update.patch'
        '005-gsoap-build.patch'
        '008-no-vboxvideo.patch'
        '012-vbglR3GuestCtrlDetectPeekGetCancelSupport.patch'
        '013-Makefile.patch'
        )
sha256sums=(
    'b031c30d770f28c5f884071ad933e8c1f83e65b93aaba03a4012077c1d90a54f'
    '2101ebb58233bbfadf3aa74381f22f7e7e508559d2b46387114bc2d8e308554c'
    '9c5238183019f9ebc7d92a8582cad232f471eab9d3278786225abc1a1c7bf66e'
    '033c597e0f5285d2ddb0490868e5b6f945f45c7b1b1152a02a9e6fea438b2c95'
    '79c0035be857726344f648aea6cf2be9326caf398d83fead569d7e5836f39990'
    '94a808f46909a51b2d0cf2c6e0a6c9dea792034943e6413bf9649a036c921b21'
    '01dbb921bd57a852919cc78be5b73580a564f28ebab2fe8d6c9b8301265cbfce'
    'e6e875ef186578b53106d7f6af48e426cdaf1b4e86834f01696b8ef1c685787f'
    '4001b5927348fe669a541e80526d4f9ea91b883805f102f7d571edbb482a9b9d'
    '9ee947c9b5ec5b25f52d3e72340fc3a57ca6e65a604e15b669ac582a3fb0dc1b'
    '7d2da8fe10a90f76bbfc80ad1f55df4414f118cd10e10abfb76070326abebd46'
    '053bfeee8863f3ffdf2f0e3f9f0d77dc61dd32764700a97a7635fd8611e20491'
    '81900e13d36630488accd8c0bfd2ceb69563fb2c4f0f171caba1cca59d438024'
    'da7e58ed37dc23c6202aab3017864579a99e78417f3421ddcc98a198198fe2c9'
)

prepare() {
    cd "VirtualBox-$pkgver"

    # apply patch from the source array (should be a pacman feature)
    local filename
    for filename in "${source[@]}"; do
        if [[ "$filename" =~ \.patch$ ]]; then
            echo "Applying patch ${filename##*/}"
            patch -p1 -N -i "$srcdir/${filename##*/}"
        fi
    done

    echo 'Applying local config'
    cp "$srcdir/LocalConfig.kmk" .

    echo 'Use our CFLAGS'
    echo "VBOX_GCC_OPT=$CXXFLAGS" >> LocalConfig.kmk
}

build() {
    cd "VirtualBox-$pkgver"

    sed -i '98s/PSHCLFORMATDATA/PSHCLFORMATS/' "src/VBox/HostServices/SharedClipboard/VBoxSharedClipboardSvc-x11-stubs.cpp"

    echo 'Build virtualbox'
    ./configure \
        --build-headless \
        --disable-docs \
        --disable-kmods \
        --disable-vmmraw \
        --disable-java \
        --disable-alsa \
        --enable-vde \
        --enable-vnc \
        --enable-webservice \
        --with-makeself=/usr/bin/echo
    # fake makeself binary to compile without nofatal
    # makeself is used by linux installer. we don't need it.
    source ./env.sh
    kmk

    echo 'Build VNC extension pack'
    kmk -C src/VBox/ExtPacks/VNC packing
}

package() {
    source "VirtualBox-$pkgver/env.sh"
    cd "VirtualBox-$pkgver/out/linux.$BUILD_PLATFORM_ARCH/release/bin"

    # patch VBox.sh for headless only
    sed -i '44,45s/VirtualBox/VBoxHeadless/' VBox.sh

    # binaries
    install -dm0755 "$pkgdir/usr/bin"
    install -m0755 VBox.sh "$pkgdir/usr/bin/VBox"
    for i in VBoxHeadless VBoxManage vboxwebsrv VBoxBalloonCtrl; do
        ln -sf VBox "$pkgdir/usr/bin/$i"
        ln -sf VBox "$pkgdir/usr/bin/${i,,}"
    done
    install -m0755 VBoxTunctl "$pkgdir/usr/bin"

    # libraries
    install -dm0755 "$pkgdir/usr/lib/virtualbox"
    install -m0755 *.so "$pkgdir/usr/lib/virtualbox"
    install -m0644 *.r0 VBoxEFI*.fd "$pkgdir/usr/lib/virtualbox"
    ## setuid root binaries
    install -m4755 VBoxHeadless VBoxNetDHCP VBoxNetAdpCtl VBoxNetNAT -t "$pkgdir/usr/lib/virtualbox"
    ## other binaries
    install -m0755 VBoxManage VBoxSVC VBoxExtPackHelperApp VBoxXPCOMIPCD VBoxBalloonCtrl vboxwebsrv webtest -t "$pkgdir/usr/lib/virtualbox"

    # components
    install -dm0755 "$pkgdir/usr/lib/virtualbox/components"
    rm components/VBoxREM.so # TODO: remove when dead link is fixed
    install -m0755 components/* -t "$pkgdir/usr/lib/virtualbox/components"

    # extensions packs
    ## as virtualbox install itself stuff in this directory, move it to /var and
    ## trick it with a symlink
    ## FIXME: trick is disabled for now
    #install -dm0755 "$pkgdir/var/lib/virtualbox/extensions"
    #install -dm0755 "$pkgdir/usr/share/virtualbox/extensions"
    #ln -s ../../../var/lib/virtualbox/extensions "$pkgdir/usr/lib/virtualbox/ExtensionPacks"
    install -dm0755 "$pkgdir/usr/lib/virtualbox/ExtensionPacks"

    # useless scripts
    install -dm0755 "$pkgdir/usr/share/virtualbox"
    install -m0755 VBoxCreateUSBNode.sh VBoxSysInfo.sh -t "$pkgdir/usr/share/virtualbox"

    # icons
    install -Dm0644 VBox.png "$pkgdir/usr/share/pixmaps/VBox.png"

    pushd icons >/dev/null
    for i in *; do
        install -d "$pkgdir/usr/share/icons/hicolor/$i/mimetypes"
        cp $i/* "$pkgdir/usr/share/icons/hicolor/$i/mimetypes"
    done
    popd >/dev/null

    #desktop
    install -Dm0644 virtualbox.xml "$pkgdir/usr/share/mime/packages/virtualbox.xml"

    #install configuration
    install -dm0755 "$pkgdir/etc/vbox"
    echo 'INSTALL_DIR=/usr/lib/virtualbox' > "$pkgdir/etc/vbox/vbox.cfg"

    # back to srcdir
    cd "$srcdir"

    #licence
    install -Dm0644 VirtualBox-$pkgver/COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # install systemd stuff
    install -Dm0644 60-vboxdrv.rules "$pkgdir/usr/lib/udev/rules.d/60-vboxdrv.rules"
    install -Dm0644 vboxweb.service "$pkgdir/usr/lib/systemd/system/vboxweb.service"
    install -Dm0644 virtualbox.sysusers "$pkgdir/usr/lib/sysusers.d/virtualbox.conf"

    # install module reloading shortcut (with a symlink with default helper)
    install -Dm0755 vboxreload "$pkgdir/usr/bin"
    ln -s vboxreload "$pkgdir/usr/bin/rcvboxdrv"
}

# vim:set ts=4 sw=4 et:
