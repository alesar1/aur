# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=intel-media-stack-bin
pkgver=2018.Q2.2
pkgrel=3
pkgdesc='Tools and libraries for developing media solutions on Intel products. Includes MediaSDK, Media Driver, libva and libva-utils.'
arch=('x86_64')
url='https://github.com/Intel-Media-SDK/MediaSDK/'
license=('MIT')
depends=('gcc-libs' 'libpciaccess' 'libdrm' 'libx11' 'libxext' 'libxfixes' 'ocl-icd' 'perl')
makedepends=('lsb-release')
provides=('intel-media-sdk' 'libmfx' 'intel-media-driver' 'libva' 'libva-utils')
conflicts=('intel-media-sdk' 'intel-media-sdk-git' 'intel-media-server-studio')
backup=('etc/profile.d/intel-mediasdk-devel.sh'
        'etc/profile.d/intel-mediasdk-devel.csh'
        'etc/profile.d/intel-mediasdk.sh'
        'etc/profile.d/intel-mediasdk.csh')
options=('!strip' 'staticlibs')
install="${pkgname}.install"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/Intel-Media-SDK/MediaSDK/releases/download/MediaSDK-${pkgver/.Q/-Q}/MediaStack.tar.gz"
        'LICENSE'::"https://raw.githubusercontent.com/Intel-Media-SDK/MediaSDK/MediaSDK-${pkgver/.Q/-Q}/LICENSE")
noextract=("${pkgname}-${pkgver}.tar.gz")
sha256sums=('7bc9fe977882fd2285f9d3e12d53424a6513bf3b1dba146b05802bf9bb9afff9'
            'dfd67773578903698f9ff4a61eb8f2d84810cbecd56f3f3cee8c649f813b6ea6')

prepare() {
    mkdir -p "${pkgname}-${pkgver}"
    cd "${pkgname}-${pkgver}"
    msg2 "Extracting ${pkgname}-${pkgver}.tar.gz with bsdtar..."
    bsdtar -xf "${srcdir}/${pkgname}-${pkgver}.tar.gz" -s'|[^/]*/||'
    
    sed -i "s|/\\$|${pkgdir}/\\$|g" install_media.sh
    sed -i "s|/etc|${pkgdir}/etc|g" install_media.sh
    sed -i '/ldconfig/s/^/#/g'      install_media.sh
    
    sed -i 's/[[:space:]]Please[[:space:]]reboot[[:space:]]to[[:space:]]make[[:space:]]it[[:space:]]effective\.//' install_media.sh
    sed -i 's/[[:space:]]Please[[:space:]]Reboot\.//' install_media.sh
}

package() {
    cd "${pkgname}-${pkgver}"
    
    local _command
    local _file
    local _header
    
    mkdir -p "$pkgdir"/{etc/{ld.so.conf.d,profile.d},usr/lib}
    
    ./install_media.sh
    
    # headers (add 'mfx' folder for ffmpeg compatibility)
    mkdir -p "${pkgdir}/opt/intel/mediasdk/include/mfx"
    cd "${pkgdir}/opt/intel/mediasdk/include"
    for _header in *.h
    do
        cd mfx
        ln -sf ../"$_header" "$_header"
        cd ..
    done
    
    # add bin folder to PATH
    for _file in "${pkgdir}/etc/profile.d/"intel-mediasdk.{,c}sh
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
    done
    
    # add symlink for libcttmetrics.so (required by 'metrics_monitor' sample)
    ln -s "../../opt/intel/mediasdk/samples/_bin/x64/libcttmetrics.so" "${pkgdir}/usr/lib"
    
    # fix libmfx permissions
    chmod 644 "${pkgdir}/opt/intel/mediasdk/lib/lin_x64/libmfx.a"
    
    # do not force the use of 'iHD' libva driver by default (let user choose)
    local _info='# uncomment the LIBVA_DRIVER_NAME line to use the Intel Media Driver (iHD) for VAAPI'
    sed -i "2i${_info}" "$pkgdir"/etc/profile.d/intel-mediasdk.*sh
    sed -i '/^export[[:space:]]LIBVA_DRIVER_NAME/s/^/#/' "${pkgdir}/etc/profile.d/intel-mediasdk.sh"
    sed -i '/^setenv[[:space:]]LIBVA_DRIVER_NAME/s/^/#/' "${pkgdir}/etc/profile.d/intel-mediasdk.csh"
    
    # license
    cd "$srcdir"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
