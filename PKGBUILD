# Maintainer: Jan de Groot <jgc@archlinux.org>
# Maintainer: bohoomil <bohoomil@zoho.com>

pkgname=fontconfig-infinality-ultimate
_basename=fontconfig
pkgdesc="A library for configuring and customizing font access, optimized for freetype2-infinality-ultimate."
date=20171017
url='http://www.fontconfig.org/release/'
license=('custom' 'MIT')
pkgver=2.12.6+5+g665584a
pkgrel=1
_commit=665584a19b0ec227c93643ffb0540d11ac8ecf7f
arch=('i686' 'x86_64')
groups=('infinality-bundle')
depends=('expat' 'freetype2-infinality-ultimate')
makedepends=('gperf' 'python-lxml')
options=('libtool')
provides=('fontconfig=$pkgver' 'fontconfig-infinality' 'fontconfig-infinality-ultimate')
conflicts=('fontconfig' 'fontconfig-infinality' 'fontconfig-infinality-git' 'fontconfig-infinality-ultimate-git')
replaces=('fontconfig-iu-comp')
backup=('etc/fonts/fonts.conf'
        'etc/fonts/conf.avail.infinality/combi/30-metric-aliases-combi.conf'
        'etc/fonts/conf.avail.infinality/combi/37-repl-global-combi.conf'
        'etc/fonts/conf.avail.infinality/combi/60-latin-combi.conf'
        'etc/fonts/conf.avail.infinality/combi/65-non-latin-combi.conf'
        'etc/fonts/conf.avail.infinality/combi/66-aliases-wine-combi.conf'
        'etc/fonts/conf.avail.infinality/35-repl-custom.conf'
        'etc/fonts/conf.avail.infinality/38-repl-webfonts-custom.conf'
        'etc/fonts/conf.avail.infinality/97-selective-rendering-custom.conf')
install=fontconfig-ultimate.install
source=("git+https://anongit.freedesktop.org/git/fontconfig#commit=${_commit}"
        https://raw.githubusercontent.com/archfan/infinality_bundle/820e74be8345a0da2cdcff0a05bf5fa10fd85740/02_fontconfig-iu/fontconfig-ultimate-git.tar.bz2
        fc-cache-ib.hook
        0001-configure-${date}.patch
        0002-configure-${date}.ac.patch
        0003-Makefile-${date}.in.patch
        0004-Makefile-${date}.conf.d.patch
        0005-Makefile-${date}.am.in.patch
        )

# a nice page to test font matching:
# http://zipcon.net/~swhite/docs/computers/browsers/fonttest.html

pkgver() {
    cd ${_basename}
      git describe --tags | sed 's/-/+/g'

}
prepare() {

  patches=(0001-configure-${date}.patch
           0002-configure-${date}.ac.patch
           0003-Makefile-${date}.in.patch
           0004-Makefile-${date}.conf.d.patch
           0005-Makefile-${date}.am.in.patch)

  # copy fontconfig-ib patches & stuff
  cd "${_basename}-ultimate-git" 
  cp -r conf.d.infinality "${srcdir}/${_basename}/conf.d.infinality"
  cd "${srcdir}/${_basename}"
  NOCONFIGURE=1 ./autogen.sh  
  # infinality & post release fixes
  for patch in "${patches[@]}"; do
    patch -Np1 -i ../${patch}
  done

  aclocal
  libtoolize -f
  automake -afi

}

build() {
  cd "${_basename}"

  ./configure --prefix=/usr \
    --sysconfdir=/etc \
    --with-templatedir=/etc/fonts/conf.avail \
    --with-templateinfdir=/etc/fonts/conf.avail.infinality \
    --with-xmldir=/etc/fonts \
    --localstatedir=/var \
    --disable-static \
    --with-default-fonts=/usr/share/fonts \
    --with-add-fonts=/usr/share/fonts
  make
}

#check() {
#  cd "${_basename}"
#  make -k check
#}

package() {
  cd "${_basename}"
  make DESTDIR="${pkgdir}" install

  #Install license
  install -m755 -d "${pkgdir}"/usr/share/licenses/"${_basename}"
  install -m644 COPYING "${pkgdir}"/usr/share/licenses/"${_basename}"

  # alpm hook
  install -D -m 644 "${srcdir}"/fc-cache-ib.hook \
    "${pkgdir}/usr/share/libalpm/hooks/90-fc-cache-ib.hook"

  #install infinality stuff
  cd "${srcdir}/${_basename}-ultimate-git"

  # copy presets
  cp -r fontconfig_patches/{combi,free,ms} \
    "${pkgdir}"/etc/fonts/conf.avail.infinality

  # install fc-presets
  install -m755 fontconfig_patches/"fc-presets" "${pkgdir}"/usr/bin/"fc-presets"

  # copy documentation
  install -m755 -d "${pkgdir}"/usr/share/doc/"${pkgname}"
  cp -r doc "${pkgdir}"/usr/share/

  find "${pkgdir}" -type d -name .git -exec rm -r '{}' +
}
sha256sums=('SKIP'
            'b4977cfb0dc64167be3b58ae63022ffb2648e08519b0c061ee2ca43620d8b980'
            '026971a9fac1ee4fb0ef74d5833ce5e12b4645de8ebdf1cadb3cb943cf46abd3'
            '7cb8401c2acbc4ac7a9e4a948a4b04d3b5446cb1153fab351c8d92d1306719ac'
            'ba8815b38d5d6e307d2107966c8b2ce0d2d48212ab99b55a56c6d66621b705ce'
            '253392c84479aa2b539a0cac4311a28a30663fd806bfe40bd9e8284a9e194431'
            '8ee8dd7ee5b85ab410dc59127db8fc09ba2a1070949fa2e03b9ddeb43c8466a8'
            '82dfce9f9e3c340ff075b6a4957004fdcaa765b94c1a0aca74f0159fa5e18db1')
