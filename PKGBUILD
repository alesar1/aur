# Maintainer: Daniel Bermond < gmail-com: danielbermond >

pkgname=intel-media-stack-bin
pkgver=2019.1.0
_srcver="${pkgver:2}"
pkgrel=2
pkgdesc='Tools and libraries for developing media solutions on Intel products. Includes MediaSDK, Media Driver, libva and libva-utils.'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=('gcc-libs' 'libpciaccess' 'libx11' 'libxext' 'libxfixes' 'wayland')
optdepends=('ocl-icd: for rotate_opencl plugin'
            'intel-compute-runtime: for rotate_opencl plugin')
makedepends=('lsb-release')
provides=('intel-media-sdk' 'libmfx' 'intel-gmmlib' 'intel-media-driver' 'libva'
          'libva-utils')
conflicts=('intel-media-sdk')
backup=('etc/profile.d/intel-mediasdk-devel.sh'
        'etc/profile.d/intel-mediasdk-devel.csh'
        'etc/profile.d/intel-mediasdk.sh'
        'etc/profile.d/intel-mediasdk.csh')
options=('!strip' '!emptydirs')
install="${pkgname}.install"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/Intel-Media-SDK/MediaSDK/releases/download/intel-mediasdk-${_srcver}/MediaStack.tar.gz"
        "https://raw.githubusercontent.com/Intel-Media-SDK/MediaSDK/intel-mediasdk-${_srcver}/LICENSE"
        'intel-media-stack-bin-fix-install.patch')
noextract=("${pkgname}-${pkgver}.tar.gz")
sha256sums=('863f837b156a66208adb1b4f0b977e2b8f2c6075d6ab93c147e15e1c8781c588'
            'dfd67773578903698f9ff4a61eb8f2d84810cbecd56f3f3cee8c649f813b6ea6'
            '5dabda9fbe6c26270c675ede993b395789d1d50be725b8bb8dbb6e206ee54fb1')

prepare() {
    mkdir -p "${pkgname}-${pkgver}"
    cd "${pkgname}-${pkgver}"
    printf '%s\n' "  -> Extracting ${pkgname}-${pkgver}.tar.gz with bsdtar..."
    bsdtar -xf "${srcdir}/${pkgname}-${pkgver}.tar.gz" -s'|[^/]*/||'
    
    patch -Np1 -i "${srcdir}/intel-media-stack-bin-fix-install.patch"
    sed -i "/^pkgdir=/s|$|${pkgdir}|" install_media.sh
}

package() {
    cd "${pkgname}-${pkgver}"
    
    local _command
    local _file
    
    mkdir -p "$pkgdir"/{etc/{ld.so.conf.d,profile.d},usr/lib}
    
    ./install_media.sh
    
    # add bin folder to PATH
    while read -rd '' _file
    do
        if printf '%s' "$_file" | grep -q '\.csh$'
        then
            _command='setenv'
        else
            _command='export'
        fi
        
        printf '\n' >> "$_file"
        printf '%s\n' '# add bin folder to PATH' >> "$_file"
        printf '%s\n' "${_command} PATH=\${PATH:+\${PATH}:}/opt/intel/mediasdk/bin" >> "$_file"
    done < <(find "${pkgdir}/etc/profile.d" -maxdepth 1 -mindepth 1 -type f -name 'intel-mediasdk.*sh' -print0)
    
    # add symlink for libcttmetrics.so (required by 'metrics_monitor' sample)
    ln -s ../share/mfx/samples/_bin/libcttmetrics.so "${pkgdir}/opt/intel/mediasdk/lib64/libcttmetrics.so"
    
    # fix broken symlinks for plugins
    rm -r "${pkgdir}/opt/intel/mediasdk/plugins"
    rm    "${pkgdir}/opt/intel/mediasdk/lib64/mfx/plugins.cfg"
    ln -s lib64/mfx                  "${pkgdir}/opt/intel/mediasdk/plugins"
    ln -s ../../share/mfx/plugins.cfg "${pkgdir}/opt/intel/mediasdk/lib64/mfx/plugins.cfg"
    
    # do not force the use of 'iHD' libva driver by default (let user choose)
    local _info='# uncomment the LIBVA lines bellow to use the Intel Media Driver (iHD) for VAAPI'
    sed -i "2i${_info}" "$pkgdir"/etc/profile.d/intel-mediasdk.{,c}sh
    sed -i '3,4s/^/#/'  "$pkgdir"/etc/profile.d/intel-mediasdk.{,c}sh
    
    # license
    cd "$srcdir"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
