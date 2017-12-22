# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

# NOTE (1):
# DPS (Display PostScript) feature is obsolete and thus not enabled.
# For more information about DPS being obsolete please visit:
# http://www.x.org/releases/X11R7.7/doc/xorg-docs/graphics/dps.html

# NOTE (2):
# Change font directories bellow to match yours.
# DeJaVu and GhostScript font directories provided bellow are the default ones.
# Windows font directory provided bellow is set according to the example in Arch Linux Wiki.
# This Windows font directory example is for people that copy/link fonts from a Windows
# installation. If you prefer, you can choose an AUR package that provides the Windows fonts
# as described in the Wiki and change the directory accordingly.

_dejavu_font_dir='/usr/share/fonts/TTF'
_gs_font_dir='/usr/share/fonts/Type1'
_urw_font_dir='/usr/share/fonts/gsfonts'
_windows_font_dir='/usr/share/fonts/WindowsFonts'
_1st_apple_font_dir='/usr/share/fonts/TTF'
_2nd_apple_font_dir='/usr/share/fonts/Type1'
_qdepth='32'

pkgbase=imagemagick-full-git
pkgname=('libmagick-full-git' 'imagemagick-full-git' 'imagemagick-full-doc-git')
pkgver=7.0.7.16.r13021.g45f72690a
_majorver="${pkgver%%.*}"
_etcdir="ImageMagick-${_majorver}"
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="An image viewing/manipulation program (Q${_qdepth} HDRI with all libs and features, git version)"
url='http://www.imagemagick.org/'
license=('custom')
depends=(
    # official repositories:
        'libltdl' 'lcms2' 'fontconfig' 'libxext' 'liblqr' 'libraqm' 'libpng'
        'gsfonts' 'ttf-dejavu' 'ghostpcl' 'ghostxps'
        'ghostscript' 'libraw' 'librsvg' 'libwebp' 'libwmf' 'libxml2'
        'ocl-icd' 'openexr' 'openjpeg2' 'pango'
        'glu' 'libxt' 'bzip2' 'djvulibre' 'fftw' 'freetype2' 'graphviz'
        'jbigkit' 'jemalloc' 'libjpeg-turbo' 'libtiff' 'pango' 'xz' 'zlib'
    # AUR:
        'autotrace-nomagick' 'flif' 'libde265' 'libfpx' 'libraqm' 'libumem-git'
)
makedepends=(
    # official repositories:
        'git'
        'libltdl' 'lcms2' 'fontconfig' 'libxext' 'liblqr' 'libraqm' 'libpng'
        'gsfonts' 'ttf-dejavu' 'opencl-headers' 'chrpath' 'ghostpcl' 'ghostxps'
        'ghostscript' 'libraw' 'librsvg' 'libwebp' 'libwmf' 'libxml2'
        'ocl-icd' 'openexr' 'openjpeg2' 'pango'
        'glu' 'libxt' 'bzip2' 'djvulibre' 'fftw' 'freetype2' 'graphviz'
        'jbigkit' 'jemalloc' 'libjpeg-turbo' 'libtiff' 'pango' 'xz' 'zlib'
    # AUR:
        'autotrace-nomagick' 'flif' 'libde265' 'libfpx' 'libraqm' 'libumem-git'
)
source=("$pkgbase"::'git+https://github.com/ImageMagick/ImageMagick.git'
        'arch-fonts.diff')
sha256sums=('SKIP'
            'a85b744c61b1b563743ecb7c7adad999d7ed9a8af816650e3ab9321b2b102e73')

prepare() {
  cd "$pkgbase"
  
  # fix up typemaps to match Arch Linux packages, where possible
  patch -Np1 -i "${srcdir}/arch-fonts.diff"
}

pkgver() {
    cd "$pkgbase"
    
    local _version="$(grep 'PACKAGE_VERSION=' version.sh | sed 's/[^0-9\.]*//g')"
    local _release="$(grep 'PACKAGE_RELEASE=' version.sh | sed 's/[^0-9]*//g')"
    local _revision="$(printf 'r%s.g%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")"
    
    printf '%s.%s.%s' "$_version" "$_release" "$_revision"
}

build() {
    cd "$pkgbase"
    
    CFLAGS="${CFLAGS} -I/usr/include/FLIF" \
    ./configure \
        --prefix='/usr' \
        --sysconfdir='/etc' \
        --enable-openmp \
        --enable-opencl \
        --enable-largefile \
        --enable-static='no' \
        --enable-shared='yes' \
        --enable-fast-install='yes' \
        --disable-delegate-build \
        --enable-cipher \
        --enable-hdri \
        --enable-hugepages \
        --enable-docs \
        --with-threads \
        --with-modules \
        --with-quantum-depth="${_qdepth}" \
        --with-magick-plus-plus \
        --with-perl \
        --with-perl-options='INSTALLDIRS=vendor' \
        --with-jemalloc \
        --with-umem \
        --with-bzlib \
        --with-x \
        --with-zlib \
        --with-autotrace \
        --without-dps \
        --with-fftw \
        --with-flif \
        --with-fpx \
        --with-djvu \
        --with-fontconfig \
        --with-freetype \
        --with-raqm \
        --with-gslib \
        --with-gvc \
        --with-heic \
        --with-jbig \
        --with-jpeg \
        --with-lcms \
        --with-openjp2 \
        --with-lqr \
        --with-lzma \
        --with-openexr \
        --with-pango \
        --with-png \
        --with-raw \
        --with-rsvg \
        --with-tiff \
        --with-webp \
        --with-wmf \
        --with-xml \
        --with-dejavu-font-dir="$_dejavu_font_dir" \
        --with-gs-font-dir="$_gs_font_dir" \
        --with-urw-base35-font-dir="$_urw_font_dir" \
        --with-windows-font-dir="$_windows_font_dir" \
        --with-apple-font-dir="$_1st_apple_font_dir" \
        --with-fontpath="$_2nd_apple_font_dir" \
        PSDelegate='/usr/bin/gs' \
        XPSDelegate='/usr/bin/gxps' \
        PCLDelegate='/usr/bin/gpcl6' \
            
    make
}

package_libmagick-full-git() {
    pkgdesc+=" (library)"
    backup=(etc/"$_etcdir"/{coder,colors,delegates,log,magic,mime,policy,quantization-table,thresholds,type,type-{dejavu,ghostscript}}.xml)
    options=('!emptydirs' 'libtool')
    provides=('libmagick' 'libmagick-git'
              "libMagickCore-${pkgver%%.*}.Q${_qdepth}HDRI.so"
              "libMagickWand-${pkgver%%.*}.Q${_qdepth}HDRI.so"
                "libMagick++-${pkgver%%.*}.Q${_qdepth}HDRI.so")
    conflicts=('libmagick' 'libmagick-fftw' 'libmagick-no-hdri'
               'libmagick-git' 'libmagick-full')
    
    cd "$pkgbase"
    make DESTDIR="$pkgdir" install
    
    rm -f "$pkgdir"/usr/lib/*.la
    
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 NOTICE  "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
    
    rm -rf binpkg/* docpkg/*
    
    mkdir -p binpkg/usr/lib {binpkg,docpkg}/usr/share
    
    # split 'imagemagick'
    cd binpkg
    mv -f "${pkgdir}/usr/bin"       usr/
    mv -f "${pkgdir}/usr/lib/perl5" usr/lib/
    mv -f "${pkgdir}/usr/share/man" usr/share/
    
    # split docs
    cd "${srcdir}/${pkgbase}/docpkg"
    mv -f "${pkgdir}/usr/share/doc" usr/share/
    
    # security fix
    # https://www.imagemagick.org/discourse-server/viewtopic.php?f=4&t=29588
    # https://imagetragick.com/
    sed -i '65i\  \<policy domain="coder" rights="none" pattern="EPHEMERAL" />' "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '66i\  \<policy domain="coder" rights="none" pattern="URL" />'       "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '67i\  \<policy domain="coder" rights="none" pattern="HTTPS" />'     "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '68i\  \<policy domain="coder" rights="none" pattern="MVG" />'       "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '69i\  \<policy domain="coder" rights="none" pattern="MSL" />'       "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '70i\  \<policy domain="coder" rights="none" pattern="TEXT" />'      "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '71i\  \<policy domain="coder" rights="none" pattern="SHOW" />'      "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '72i\  \<policy domain="coder" rights="none" pattern="WIN" />'       "${pkgdir}/etc/${_etcdir}/policy.xml"
    sed -i '73i\  \<policy domain="coder" rights="none" pattern="PLT" />'       "${pkgdir}/etc/${_etcdir}/policy.xml"
}

package_imagemagick-full-git() {
    depends=("libmagick-full-git=${pkgver}-${pkgrel}")
    optdepends=(
        # AUR:
            'imagemagick-full-doc-git: manual and API docs'
            'ttf-mac-fonts: for Apple fonts support'
    )
    provides=('imagemagick' 'imagemagick-fftw')
    conflicts=('imagemagick' 'imagemagick-fftw' 'imagemagick-no-hdri'
               'imagemagick-git' 'imagemagick-full')
    options=('!emptydirs')
    
    cd "$pkgbase"
    
    mv -f binpkg/* "$pkgdir"
    
    find "$pkgdir/usr/lib/perl5" -name '*.so' -exec chrpath -d {} +
    
    # template start; name=perl-binary-module-dependency; version=1;
    if [ $(find "${pkgdir}/usr/lib/perl5/" -name '*.so') ] 
    then
        local _perlver_min="$(perl -e '$v = $^V->{version}; print $v->[0].".".($v->[1]);')"
        local _perlver_max="$(perl -e '$v = $^V->{version}; print $v->[0].".".($v->[1]+1);')"
        depends+=("perl>=${_perlver_min}" "perl<${_perlver_max}")
    fi
    # template end;
    
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 NOTICE  "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
}

package_imagemagick-full-doc-git() {
    pkgdesc+=" (utilities manuals and libraries API)"
    arch=('any')
    provides=('imagemagick-doc')
    conflicts=('imagemagick-doc' 'imagemagick-git-doc' 'imagemagick-full-doc')
    
    cd "$pkgbase"
    
    mv -f docpkg/* "$pkgdir"
    
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 NOTICE  "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
}
