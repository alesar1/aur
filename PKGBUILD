# Maintainer : Daniel Bermond <dbermond@archlinux.org>
# Contributor: Rainmaker <rainmaker52@gmail.com>
# Contributor: gary9872	<garysBoXatgeemale.com>
# Contributor: khomutsky <bogdan@khomutsky.com>
# Contributor: M0Rf30

pkgname=virtualbox-bin
pkgver=6.1.8
_build=137981
_rev=83509
pkgrel=1
pkgdesc='Oracle VM VirtualBox Binary Edition (Oracle branded non-OSE version)'
arch=('x86_64')
url='https://www.virtualbox.org/'
license=('GPL2')
depends=('device-mapper' 'dkms' 'fontconfig' 'gcc' 'hicolor-icon-theme' 'libgl'
         'libidl2' 'libxcursor' 'libxinerama' 'libxmu' 'python' 'sdl')
makedepends=('linux-headers')
optdepends=('virtualbox-ext-oracle: for Oracle extensions'
            'java-runtime: for webservice sdk java bindings'
            'linux-headers: build the module for Arch kernel'
            'linux-lts-headers: build the module for LTS Arch kernel')
provides=("virtualbox=${pkgver}" 'virtualbox-sdk' 'VIRTUALBOX-HOST-MODULES'
          'virtualbox-host-dkms' 'virtualbox-guest-iso')
conflicts=('virtualbox' 'virtualbox-sdk' 'virtualbox-host-dkms' 'virtualbox-host-modules-arch')
replaces=('virtualbox_bin' 'virtualbox-sun')
backup=('etc/vbox/vbox.cfg' 'etc/conf.d/vboxweb')
options=('!strip' '!emptydirs')
install="${pkgname}.install"
source=("http://download.virtualbox.org/virtualbox/${pkgver}/VirtualBox-${pkgver}-${_build}-Linux_amd64.run"
        "https://download.virtualbox.org/virtualbox/${pkgver}/VirtualBoxSDK-${pkgver}-${_build}.zip"
        "VBoxAuth-r${_rev}.h"::"https://www.virtualbox.org/svn/vbox/trunk/include/VBox/VBoxAuth.h?p=${_rev}"
        "VBoxAuthPAM-r${_rev}.c"::"https://www.virtualbox.org/svn/vbox/trunk/src/VBox/HostServices/auth/pam/VBoxAuthPAM.c?p=${_rev}"
        "VBoxAuthSimple-r${_rev}.cpp"::"https://www.virtualbox.org/svn/vbox/trunk/src/VBox/HostServices/auth/simple/VBoxAuthSimple.cpp?p=${_rev}"
        'VBoxFixUSB'
        '10-vboxdrv.rules'
        'vboxweb.rc'
        'vboxweb.conf'
        'do_dkms'
        'dkms.conf'
        '013-Makefile.patch')
noextract=("VirtualBoxSDK-${pkgver}-${_build}.zip")
sha256sums=('43e4b8e75c811acacf03d543c9b310ec97f15a08012f29c04f1439a2b4f9f189'
            'db5c4b82054b8020ae9f4d19a9fda93a3881e77969a2e340f6dda1ec308f974a'
            '61eab70173ec0c4959ec3b8bf9fa19cfac49bb223a0bb041fe12aa14742db15a'
            'f54c38e2d112e0221daa1ddd563a260d18d7d510c485a7d27c317d379e06ff79'
            '2ef58e7f24ed9114dbf29dfa77372b5e15962a2244315ffbfb592cdc10920ad8'
            '0aebe22abab402ea6b6573af637a99d8056a904920a52d84fb97729219219c23'
            '69417a9e8855cab8e4878886abe138f559fd17ae487d4cd19c8a24974a8bbec2'
            '656905de981ffa24f6f921c920538854a235225053f44baedacc07b46ca0cf56'
            '12dbba3b59991f2b68cddeeeda20236aeff63e11b7e2d1b08d9d6a82225f6651'
            'cc1c0500ab07bc13563d99037f776bf64bdc90bb521e31e2e0b04e42ea5bb36a'
            '63f1e9eabedec2170bd0589aaa2bf5025ff8f8ec1764cc4823cbe446e9ce1388'
            '268e794de9d66a2751006b2ca3810fc6a05da4af2ffa8b58c56c94b292f1f424')

prepare() {
    mkdir -p "${pkgname}-${pkgver}/VirtualBox-extracted"
    
    # extract the main source file
    yes 2>/dev/null | sh "VirtualBox-${pkgver}-${_build}-Linux_amd64.run" \
                          --target "${pkgname}-${pkgver}" --nox11 --noexec &> /dev/null
    tar -jxf "${pkgname}-${pkgver}/VirtualBox.tar.bz2" -C "${pkgname}-${pkgver}/VirtualBox-extracted"
    
    # extract sdk
    bsdtar -xf "VirtualBoxSDK-${pkgver}-${_build}.zip" -C "${pkgname}-${pkgver}"
    
    # fix dkms build
    patch -d "${pkgname}-${pkgver}/VirtualBox-extracted" -Np1 -i "${srcdir}/013-Makefile.patch"
}

build() {
    local _installdir='opt/VirtualBox'
    
    cd "${pkgname}-${pkgver}/sdk/installer"
    VBOX_INSTALL_PATH="/${_installdir}" python vboxapisetup.py build
}

package() {
    local _installdir='opt/VirtualBox'
    
    # install bundled files
    printf '%s\n' '  -> Installing bundled files...'
    install -d "${pkgdir}/opt"
    cp -pr "${pkgname}-${pkgver}/VirtualBox-extracted" "${pkgdir}/${_installdir}"
    
    # hardened build: mark binaries suid root, and make sure the
    # directory is only writable by the user
    printf '%s\n' '  -> Fixing permissions...'
    cd "${pkgdir}/${_installdir}"
    chmod 4755 VirtualBoxVM VBox{Headless,Net{AdpCtl,DHCP,NAT},SDL,VolInfo}
    chmod go-w "${pkgdir}/${_installdir}"
    
    # install SDK
    printf '%s\n' '  -> Installing SDK...'
    cd "${srcdir}/${pkgname}-${pkgver}"
    pushd 'sdk/installer' >/dev/null
    VBOX_INSTALL_PATH="/${_installdir}" python vboxapisetup.py install --root "$pkgdir" --skip-build --optimize='1'
    popd >/dev/null
    rm -r "${pkgdir}/${_installdir}/sdk"
    mkdir -p "${pkgdir}/${_installdir}/sdk"
    cp -a sdk/bindings "${pkgdir}/${_installdir}/sdk"
    cp -a sdk/docs     "${pkgdir}/${_installdir}"
    install -D -m644 "${srcdir}/VBoxAuth-r${_rev}.h"         "${pkgdir}/${_installdir}/sdk/bindings/auth/include/VBoxAuth.h"
    install -D -m644 "${srcdir}/VBoxAuthPAM-r${_rev}.c"      "${pkgdir}/${_installdir}/sdk/bindings/auth/VBoxAuthPAM.cpp"
    install -D -m644 "${srcdir}/VBoxAuthSimple-r${_rev}.cpp" "${pkgdir}/${_installdir}/sdk/bindings/auth/VBoxAuthSimple.cpp"
    
    # install udev rules
    printf '%s\n' '  -> Installing udev rules...'
    cd "${pkgdir}/${_installdir}"
    install -D -m0644 "${srcdir}/10-vboxdrv.rules" "${pkgdir}/usr/lib/udev/rules.d/10-vboxdrv.rules"
    ## we need to copy and not symlink VBoxCreateUSBNode.sh in /usr/lib/udev to avoid udevd
    ## to look /opt when /opt is not mounted. This can be done until VBoxCreateUSBNode.sh doesn't
    ## need more stuff from /opt
    cp -a VBoxCreateUSBNode.sh "${pkgdir}/usr/lib/udev/"
    
    printf '%s\n' '  -> Installing scripts...'
    
    # install VBoxFixUSB script
    install -D -m0755 "${srcdir}/VBoxFixUSB" VBoxFixUSB
    
    # install vboxweb initscript
    install -D -m0755 "${srcdir}/vboxweb.rc"   "${pkgdir}/etc/rc.d/vboxweb"
    install -D -m0644 "${srcdir}/vboxweb.conf" "${pkgdir}/etc/conf.d/vboxweb"
    
    printf '%s\n' '  -> Creating needed symlinks...'
    
    # symlinks for working around unsupported $ORIGIN/.. in VBoxC.so
    local _lib
    for _lib in VBox{RT,XPCOM}.so
    do
        ln -s "../${_lib}" "components/${_lib}"
    done
    
    # symlink the launchers
    local _bin
    install -d -m0755 "${pkgdir}/usr/bin"
    for _bin in VirtualBox{,VM} VBox{Headless,Manage,SDL,SVC,Tunctl,NetAdpCtl,FixUSB}
    do
        ln -s "../../${_installdir}/${_bin}" "${pkgdir}/usr/bin/${_bin}"
        ln -s "../../${_installdir}/${_bin}" "${pkgdir}/usr/bin/${_bin,,}"
    done
    ln -s "../../${_installdir}/rdesktop-vrdp" "${pkgdir}/usr/bin/rdesktop-vrdp"
    
    # symlink the desktop icon and .desktop files
    install -d -m0755 "${pkgdir}/usr/"{share/applications,share/pixmaps}
    ln -s "../../../${_installdir}/VBox.png"                     "${pkgdir}/usr/share/pixmaps/VBox.png"
    ln -s "../../../${_installdir}/icons/128x128/virtualbox.png" "${pkgdir}/usr/share/pixmaps/virtualbox.png"
    ln -s "../../../${_installdir}/virtualbox.desktop"           "${pkgdir}/usr/share/applications/virtualbox.desktop"
    
    # symlink mime info
    install -d -m0755 "${pkgdir}/usr/share/mime/packages"
    ln -s "../../../../${_installdir}/virtualbox.xml" "${pkgdir}/usr/share/mime/packages/virtualbox.xml"
    
    # symlink doc
    install -d -m0755 "${pkgdir}/usr/share/doc/${pkgname}"
    ln -s "../../../../${_installdir}/VirtualBox.chm" "${pkgdir}/usr/share/doc/${pkgname}/virtualbox.chm"
    
    # symlink icons
    local _dir
    local _icon
    pushd icons >/dev/null
    for _dir in *
    do
        cd "$_dir"
        install -d -m0755 "${pkgdir}/usr/share/icons/hicolor/${_dir}/"{apps,mimetypes}
        for _icon in *
        do
            if [ "$_icon" = 'virtualbox.png' ] 
            then
                ln -s "../../../../../../${_installdir}/icons/${_dir}/${_icon}" "${pkgdir}/usr/share/icons/hicolor/${_dir}/apps/${_icon}"
            else
                ln -s "../../../../../../${_installdir}/icons/${_dir}/${_icon}" "${pkgdir}/usr/share/icons/hicolor/${_dir}/mimetypes/${_icon}"
            fi
        done
        cd - >/dev/null
    done
    popd >/dev/null
    
    # with the relase of VirtualBox 5.1.0, Oracle dropped DKMS support from their package
    # we will restore DKMS with the use of these config files
    printf '%s\n' '  -> Installing DKMS support...'
    install -D -m0755 "${srcdir}/do_dkms" -t "${pkgdir}/${_installdir}/src/vboxhost"
    ## update module version
    cd "$srcdir"
    cp -a dkms.conf "${pkgname}-${pkgver}"
    sed -i "s/^\(PACKAGE_VERSION\)=/\1=${pkgver}/" "${pkgname}-${pkgver}/dkms.conf"
    install -D -m0644 "${pkgname}-${pkgver}/dkms.conf" -t "${pkgdir}/${_installdir}/src/vboxhost"

    # module sources in /usr/src
    printf '%s\n' '  -> Installing module sources...'
    install -d -m0755 "${pkgdir}/usr/src"
    mv "${pkgdir}/${_installdir}/src/vboxhost" "${pkgdir}/usr/src/vboxhost-${pkgver}_non_OSE"
    
    # write the configuration file
    printf '%s\n' '  -> Writing the configuration file...'
    install -D -m0644 /dev/null "${pkgdir}/etc/vbox/vbox.cfg"
    cat > "${pkgdir}/etc/vbox/vbox.cfg" << __EOF__
# VirtualBox installation directory
INSTALL_DIR='/${_installdir}'

# VirtualBox version
INSTALL_VER='${pkgver}'
INSTALL_REV='${_build}'
__EOF__
    
    # write modules-load.d configuration to ensure that modules are loaded at boot
    printf '%s\n' "  -> Writing 'modules-load.d' configuration..."
    install -D -m644 /dev/null "${pkgdir}/usr/lib/modules-load.d/${pkgname}.conf"
    cat > "${pkgdir}/usr/lib/modules-load.d/${pkgname}.conf" << __EOF__
# Load virtualbox kernel modules at boot
# This file was installed by the ${pkgname} AUR package
vboxdrv
vboxnetadp
vboxnetflt
__EOF__
}
