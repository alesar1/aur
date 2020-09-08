# $Id$
# Maintainer: Sébastien "Seblu" Luttringer
# Contributor: Ionut Biru <ibiru@archlinux.org>

pkgbase=virtualbox-svn
pkgname=('virtualbox-svn'
         'virtualbox-host-dkms-svn'
         'virtualbox-guest-dkms-svn'
         'virtualbox-sdk-svn'
         'virtualbox-guest-utils-svn'
         'virtualbox-guest-utils-nox-svn'
         'virtualbox-ext-vnc-svn')
pkgver=86044
pkgrel=2
_vboxsf_commit='5aba938bcabd978e4615186ad7d8617d633e6f30'
arch=('x86_64')
url='http://virtualbox.org'
license=('GPL' 'custom')
makedepends=('subversion'
             'alsa-lib'
             'bin86'
             'cdrkit'
             'curl'
             'dev86'
             'device-mapper'
             'git'
             'glu'
             'gsoap'
             'iasl'
             'jdk7-openjdk'
             'libidl2'
             'libpulse'
             'libstdc++5'
             'libvncserver'
             'libvpx'
             'libxcomposite'
             'libxcursor'
             'libxinerama'
             'libxml2'
             'libxmu'
             'libxrandr'
             'libxslt'
             'libxtst'
             'linux-headers'
             'mesa'
             'opus'
             'python'
             'qt5-base'
             'qt5-x11extras'
             'qt5-tools'
             'sdl'
             'sdl_ttf'
             'vde2'
             'xalan-c'
             'xorgproto'
             'xorg-server-devel')
source=("VirtualBox::svn+http://www.virtualbox.org/svn/vbox/trunk"
        # We need to build a modified version of vboxsf for Linux 4.16
        # https://bugzilla.redhat.com/show_bug.cgi?id=1481630#c65
        "git+https://github.com/jwrdegoede/vboxsf#commit=$_vboxsf_commit"
        'virtualbox-host-dkms.conf'
        'virtualbox-vboxsf-dkms.conf'
        'virtualbox.sysusers'
        'virtualbox-guest-utils.sysusers'
        '60-vboxdrv.rules'
        '60-vboxguest.rules'
        'LocalConfig.kmk'
        'vboxservice.service'
        'vboxservice-nox.service'
        'vboxdrmclient.service'
        'vboxweb.service'
        'vboxreload'
        '001-disable-update.patch'
        '005-gsoap-build.patch'
        '006-rdesktop-vrdp-keymap-path.patch'
        '008-no-vboxvideo.patch'
        '012-vbglR3GuestCtrlDetectPeekGetCancelSupport.patch'
        '013-Makefile.patch'
        '016-VBoxServiceAutoMount-Change-Linux-mount-code-to-use-.patch'
        '017-fix-narrowing-conversion.patch'
        '018-xclient.patch')

pkgver() {
  cd "VirtualBox"
  local ver="$(svnversion)"
  printf "%s" "${ver//[[:alpha:]]}"
}

prepare() {
    cd "VirtualBox"

    # apply patch from the source array (should be a pacman feature)
    local filename
    for filename in "${source[@]}"; do
        if [[ "$filename" =~ \.patch$ ]]; then
            echo "Applying patch ${filename##*/}"
            patch -p1 -N -i "$srcdir/${filename##*/}"
        fi
    done
    
    sed -i '#include<QPainter>/a #include<QPainterPath>' src/VBox/Frontends/VirtualBox/src/monitor/UIMonitorCommon.cpp
    echo 'Applying local config'
    cp "$srcdir/LocalConfig.kmk" .
    
    echo 'Use our CFLAGS'
    echo "VBOX_GCC_OPT=$CXXFLAGS" >> LocalConfig.kmk
}

build() {
    cd "VirtualBox"

    echo 'Build virtualbox'
    ./configure \
        --disable-docs \
        --disable-kmods \
        --disable-vmmraw \
        --enable-vde \
        --enable-vnc \
        --enable-webservice \
        --with-makeself=/usr/bin/echo
    # fake makeself binary to compile without nofatal
    # makeself is used by linux installer. we don't need it.
    source ./env.sh
    kmk

    echo 'Build rdesktop-vrdp'
    kmk -C src/VBox/RDP/client-1.8.4

    echo 'Build VNC extension pack'
    kmk -C src/VBox/ExtPacks/VNC packing

    echo 'Build vboximg-mount'
    kmk -C src/VBox/ImageMounter/vboximg-mount
}

package_virtualbox-svn() {
    pkgdesc='Powerful x86 virtualization for enterprise as well as home use'
    depends=('glibc' 'openssl' 'curl' 'gcc-libs' 'libpng' 'python' 'sdl'
             'libvpx' 'libxml2' 'procps-ng' 'shared-mime-info' 'zlib'
             'libxcursor' 'libxinerama' 'libx11' 'libxext' 'libxmu' 'libxt'
             'opus' 'desktop-file-utils' 'hicolor-icon-theme' 'qt5-base' 'qt5-x11extras' 'VIRTUALBOX-HOST-MODULES-SVN')
    optdepends=('vde2: Virtual Distributed Ethernet support'
                'virtualbox-guest-iso: Guest Additions CD image'
                'virtualbox-ext-vnc: VNC server support'
                'virtualbox-sdk: Developer kit')
    backup=('etc/vbox/vbox.cfg')
    provides=('virtualbox')
    replaces=('virtualbox-ose')
    conflicts=('virtualbox-ose' 'virtualbox')
    install=virtualbox.install

    source "VirtualBox/env.sh"
    cd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/bin"

    # binaries
    install -dm0755 "$pkgdir/usr/bin"
    install -m0755 VBox.sh "$pkgdir/usr/bin/VBox"
    for i in VBoxHeadless VBoxManage VBoxSDL VirtualBox vboxwebsrv VBoxBalloonCtrl; do
        ln -sf VBox "$pkgdir/usr/bin/$i"
        ln -sf VBox "$pkgdir/usr/bin/${i,,}"
    done
    install -m0755 VBoxTunctl "$pkgdir/usr/bin"
    install -m0755 rdesktop-vrdp "$pkgdir/usr/bin"
    install -m0755 vboximg-mount "$pkgdir/usr/bin"

    # libraries
    install -dm0755 "$pkgdir/usr/lib/virtualbox"
    install -m0755 *.so "$pkgdir/usr/lib/virtualbox"
    install -m0644 *.r0 VBoxEFI*.fd "$pkgdir/usr/lib/virtualbox"
    ## setuid root binaries
    install -m4755 VBoxSDL VirtualBoxVM VBoxHeadless VBoxNetDHCP VBoxNetAdpCtl VBoxNetNAT -t "$pkgdir/usr/lib/virtualbox"
    ## other binaries
    install -m0755 VirtualBox VBoxManage VBoxSVC VBoxExtPackHelperApp VBoxXPCOMIPCD VBoxTestOGL VBoxBalloonCtrl vboxwebsrv webtest -t "$pkgdir/usr/lib/virtualbox"

    # components
    install -dm0755 "$pkgdir/usr/lib/virtualbox/components"
    #rm components/VBoxREM.so # TODO: remove when dead link is fixed
    install -m0755 components/* -t "$pkgdir/usr/lib/virtualbox/components"

    # extensions packs
    ## as virtualbox install itself stuff in this directory, move it to /var and
    ## trick it with a symlink
    ## FIXME: trick is disabled for now
    #install -dm0755 "$pkgdir/var/lib/virtualbox/extensions"
    #install -dm0755 "$pkgdir/usr/share/virtualbox/extensions"
    #ln -s ../../../var/lib/virtualbox/extensions "$pkgdir/usr/lib/virtualbox/ExtensionPacks"
    install -dm0755 "$pkgdir/usr/lib/virtualbox/ExtensionPacks"

    # languages
    install -dm0755 "$pkgdir/usr/share/virtualbox/nls"
    install -m0755 nls/*.qm -t "$pkgdir/usr/share/virtualbox/nls"

    # rdesktop keymaps
    install -dm0755 "$pkgdir/usr/share/virtualbox/rdesktop-vrdp-keymaps"
    install -m0644 rdesktop-vrdp-keymaps/* "$pkgdir/usr/share/virtualbox/rdesktop-vrdp-keymaps"

    # useless scripts
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
    install -Dm0644 virtualbox.desktop "$pkgdir/usr/share/applications/virtualbox.desktop"
    install -Dm0644 virtualbox.xml "$pkgdir/usr/share/mime/packages/virtualbox.xml"

    #install configuration
    install -dm0755 "$pkgdir/etc/vbox"
    echo 'INSTALL_DIR=/usr/lib/virtualbox' > "$pkgdir/etc/vbox/vbox.cfg"

    # back to srcdir
    cd "$srcdir"

    #licence
    install -Dm0644 VirtualBox/COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # install systemd stuff
    install -Dm0644 60-vboxdrv.rules "$pkgdir/usr/lib/udev/rules.d/60-vboxdrv.rules"
    install -Dm0644 vboxweb.service "$pkgdir/usr/lib/systemd/system/vboxweb.service"
    install -Dm0644 virtualbox.sysusers "$pkgdir/usr/lib/sysusers.d/virtualbox.conf"

    # install module reloading shortcut (with a symlink with default helper)
    install -Dm0755 vboxreload "$pkgdir/usr/bin"
    ln -s vboxreload "$pkgdir/usr/bin/rcvboxdrv"
}

package_virtualbox-sdk-svn() {
    pkgdesc='VirtualBox Software Developer Kit (SDK)'
    depends=('python')
    provides=('virtualbox-sdk')
    conflicts=('virtualbox-sdk')

    install -dm0755 "$pkgdir/usr/lib/virtualbox"

    source "VirtualBox/env.sh"
    cd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/bin"

    install -Dm0755 vboxshell.py "$pkgdir/usr/lib/virtualbox/vboxshell.py"
    # python sdk
    pushd sdk/installer
    VBOX_INSTALL_PATH="/usr/lib/virtualbox" python vboxapisetup.py install --root "$pkgdir"
    popd
    cp -r sdk "$pkgdir/usr/lib/virtualbox"
    rm -r "$pkgdir/usr/lib/virtualbox/sdk/installer"
    # licence
    install -Dm0644 "$srcdir/VirtualBox/COPYING" \
        "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_virtualbox-host-dkms-svn() {
    pkgdesc='VirtualBox Host kernel modules sources'
    depends=('dkms' 'gcc' 'make')
    replaces=('virtualbox-source'
              'virtualbox-host-source'
              'virtualbox-host-modules-lts')
    conflicts=('virtualbox-source' 'virtualbox-host-source' 'virtualbox-host-dkms')
    provides=('VIRTUALBOX-HOST-MODULES-SVN')
    optdepends=('linux-headers: build modules against Arch kernel'
                'linux-lts-headers: build modules against LTS kernel'
                'linux-zen-headers: build modules against ZEN kernel')
    install=virtualbox-host-dkms.install

    install -dm0755 "$pkgdir/usr/src"
    source "VirtualBox/env.sh"
    cd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/bin"
    cp -r src "$pkgdir/usr/src/vboxhost-svn_OSE"
    # licence
    install -Dm0644 "$srcdir/VirtualBox/COPYING" \
        "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    # module loading
    local _p="$pkgdir/usr/lib/modules-load.d/virtualbox-host-dkms.conf"
    install -Dm0644 /dev/null "$_p"
    printf "vboxdrv\nvboxnetadp\nvboxnetflt\n" > "$_p"
    # starting vbox 5.1, dkms.conf file was dropped
    local _p="$pkgdir/usr/src/vboxhost-svn_OSE/dkms.conf"
    install -Dm0644 "$srcdir/virtualbox-host-dkms.conf" "$_p"
    sed -i "s,@VERSION@,svn," "$_p"
}

package_virtualbox-guest-dkms-svn() {
    pkgdesc='VirtualBox Guest kernel modules sources'
    depends=('dkms' 'gcc' 'make')
    replaces=('virtualbox-archlinux-source'
              'virtualbox-guest-source'
              'virtualbox-guest-modules-lts')
    provides=('VIRTUALBOX-GUEST-MODULES-SVN')
    conflicts=('virtualbox-archlinux-source' 'virtualbox-guest-source' 'virtualbox-guest-dkms')
    optdepends=('linux-headers: build modules against Arch kernel'
                'linux-lts-headers: build modules against LTS kernel'
                'linux-zen-headers: build modules against ZEN kernel')
    install=virtualbox-guest-dkms.install

    install -dm0755 "$pkgdir/usr/src"
    source "VirtualBox/env.sh"
    cd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/bin/additions"
    cp -r src "$pkgdir/usr/src/vboxguest-svn_OSE"
    # licence
    install -Dm0644 "$srcdir/VirtualBox/COPYING" \
        "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    # module loading
    local _p="$pkgdir/usr/lib/modules-load.d/virtualbox-guest-dkms.conf"
    install -Dm0644 /dev/null "$_p"
    printf "vboxguest\nvboxsf\nvboxvideo\n" > "$_p"

    # vboxsf module for Linux 4.16 to Linux 5.5
    install -d "$pkgdir/usr/src/vboxsf-svn_OSE"
    cp -rT "$srcdir/vboxsf" "$pkgdir/usr/src/vboxsf-svn_OSE/vboxsf"
    rm -rf "$pkgdir/usr/src/vboxsf-svn_OSE/vboxsf/.git"
    echo "obj-m = vboxsf/" >"$pkgdir/usr/src/vboxsf-svn_OSE/Makefile"
    local _p="$pkgdir/usr/src/vboxsf-svn_OSE/dkms.conf"
    install -Dm0644 "$srcdir/virtualbox-vboxsf-dkms.conf" "$_p"
    sed -i "s,@VERSION@,svn," "$_p"
}

package_virtualbox-guest-utils-svn() {
    pkgdesc='VirtualBox Guest userspace utilities'
    depends=('glibc' 'pam' 'libx11' 'libxcomposite'
             'libxdamage' 'libxext' 'libxfixes' 'libxmu' 'libxt' 'xorg-xrandr'
             'xf86-video-vmware' 'VIRTUALBOX-GUEST-MODULES-SVN')
    replaces=('virtualbox-archlinux-additions' 'virtualbox-guest-additions')
    provides=('virtualbox-guest-utils')
    conflicts=('virtualbox-archlinux-additions' 'virtualbox-guest-additions' 'virtualbox-guest-utils-nox' 'virtualbox-guest-utils')

    source "VirtualBox/env.sh"
    pushd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/bin/additions"
    install -d "$pkgdir/usr/bin"
    install -m0755 VBoxClient VBoxControl VBoxDRMClient VBoxService "$pkgdir/usr/bin"
    install -m0755 -D "$srcdir"/VirtualBox/src/VBox/Additions/x11/Installer/98vboxadd-xclient \
        "$pkgdir"/usr/bin/VBoxClient-all
    install -m0644 -D "$srcdir"/VirtualBox/src/VBox/Additions/x11/Installer/vboxclient.desktop \
        "$pkgdir"/etc/xdg/autostart/vboxclient.desktop
    install -m0755 -D pam_vbox.so "$pkgdir/usr/lib/security/pam_vbox.so"
    popd
    # systemd stuff
    install -Dm0644 60-vboxguest.rules "$pkgdir/usr/lib/udev/rules.d/60-vboxguest.rules"
    install -Dm0644 vboxdrmclient.service "$pkgdir/usr/lib/systemd/system/vboxdrmclient.service"
    install -Dm0644 vboxservice.service "$pkgdir/usr/lib/systemd/system/vboxservice.service"
    install -Dm0644 virtualbox-guest-utils.sysusers "$pkgdir/usr/lib/sysusers.d/virtualbox-guest-utils.conf"
    # licence
    install -Dm0644 VirtualBox/COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_virtualbox-guest-utils-nox-svn() {
    pkgdesc='VirtualBox Guest userspace utilities without X support'
    depends=('glibc' 'pam' 'VIRTUALBOX-GUEST-MODULES-SVN')
    provides=('virtualbox-guest-utils-nox')
    conflicts=('virtualbox-guest-utils' 'virtualbox-guest-utils-nox')

    source "VirtualBox/env.sh"
    pushd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/bin/additions"
    install -d "$pkgdir/usr/bin"
    install -m0755 VBoxControl VBoxService "$pkgdir/usr/bin"
    install -m0755 -D pam_vbox.so "$pkgdir/usr/lib/security/pam_vbox.so"
    popd
    # systemd stuff
    install -Dm0644 60-vboxguest.rules "$pkgdir/usr/lib/udev/rules.d/60-vboxguest.rules"
    install -Dm0644 vboxservice-nox.service "$pkgdir/usr/lib/systemd/system/vboxservice.service"
    install -Dm0644 virtualbox-guest-utils.sysusers "$pkgdir/usr/lib/sysusers.d/virtualbox-guest-utils.conf"
    # licence
    install -Dm0644 "$srcdir/VirtualBox/COPYING" \
        "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_virtualbox-ext-vnc-svn() {
    pkgdesc='VirtualBox VNC extension pack'
    depends=('virtualbox' 'libvncserver')
    optdepends=('tigervnc: vnc client')
    provides=('virtualbox-ext-vnc')
    conflicts=('virtualbox-ext-vnc')
    install=virtualbox-ext-vnc.install

    source "VirtualBox/env.sh"
    cd "VirtualBox/out/linux.$BUILD_PLATFORM_ARCH/release/packages"
    install -Dm0644 VNC-*.vbox-extpack "$pkgdir/usr/share/virtualbox/extensions/VNC-svn.vbox-extpack"
    # licence
    install -Dm0644 "$srcdir/VirtualBox/COPYING" \
        "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

md5sums=('SKIP'
         'SKIP'
         'c24e71d845e06f153fa263af0384fc8c'
         '050736b0edbf942776022bfca61a5754'
         '984412a63aa9c07ddc3cfd970381d5df'
         '4833c8e0524fd2272b24ba0d94aef006'
         '6e2722bfd7013c1b0174382626ac1b8d'
         'ed1341881437455d9735875ddf455fbe'
         '9a72e6635976513f442f418431dc6151'
         '8ba9179c4a3516904417d773816dd992'
         'fcf6bcef98b16849d5c9f048592739c0'
         '6ab29654246a060561ad2de675105072'
         'bc9efed88e0469cd7fc460d5a5cd7b4b'
         '6a4e9581a6240b64feee765a1f19e5c3'
         'b709cf16ffe9af2f5147fb2ef3fef529'
         'e8a0b47e61ddcffdeed71086585a1ef3'
         '08add9a5974c7212b783840dd6db1cc7'
         'b71d308001ad15bfc1f0267de9be6c37'
         '1b473941fd972a300219c211e389b5a1'
         '481d456c8c4e2e0833dceefaed62a305'
         '82db7666c0034c5388995bd062dc35e1'
         '7be927b4626f8b3df77d4d2e8c8c25a0'
         '62a5ae2264adf5de908fcfcb906c2648')
