# Maintainer: Ewout van Mansom <ewout@vanmansom.name>
# Contributor: Bob Paul <archlinux.org@bobpaul.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: David Runge <dvzrv@archlinux.org>
# Contributor: Sarah Hay <sarahhay@mb.sympatico.ca>
# Contributor: Simo L. <neotuli@yahoo.com>
# Contributor: eric <eric@archlinux.org>

_name=backends
pkgname=sane-networking
pkgver=1.0.32
pkgrel=4
pkgdesc="Scanner Access Now Easy (with networking patches)"
url="http://www.sane-project.org/"
arch=('x86_64')
license=('GPL2')
# NOTE: libgphoto2 can be moved to makedepends once the package also provides
# libgphoto2_port.so
depends=('bash' 'cairo' 'gcc-libs' 'glibc' 'libgphoto2' 'libnl'
'libpng' 'libxml2' 'libieee1284' 'net-snmp' 'openssl' 'v4l-utils')
makedepends=('autoconf-archive' 'avahi' 'curl' 'glib2' 'libjpeg-turbo'
'libtiff' 'libusb' 'poppler-glib' 'python' 'systemd' 'texlive-latexextra')
provides=('libsane.so' 'sane')
conflicts=('sane' 'sane-git')
source=("https://gitlab.com/sane-project/${_name}/-/archive/${pkgver}/${_name}-${pkgver}.tar.gz"
        "66-saned.rules"
        "sane.sysusers"
        "saned.service"
        "saned.socket"
        "enable-networking.patch"
)
sha512sums=('a0f6b185704af2a34f67587ef79af3fd5f54dbe540a08a8db4cebd502d08217d07a5a19a855020a772509b6679f53cb028108e62c3aff4847f8a816e7ba16b6c'
            'd0d1b6bd6fbb04d610e7186e26d04c2233a620cc7c731ca3acd7fb860dd033fbe99d8974ffa1dd59c8affcc4aa2664d76ab3dfd6f7b2a734b31d7e3832359c41'
            'd8cd194b57eff2249df2b8d540a892e518aa3e3bba6387211ed21230dc235e98c49b71f262f0b1007e8c859c59776410840376244e0aec1f06363881b2c81fd8'
            'baf2cf2fdff689f776973ac4f69ea02b131f2a1a754a8d52a8e8ad33b0e559ba286649a891723a7ad94b2bcb01ec88155d43c36eaeb35e47fbc8ea80c49c5d47'
            'a23ceeeb02bd9e214702003a3165886858ecbdd93df89cd37ad5f00581745454548ccda0ab656f2dc0acbf2896a8781568c786797e64a07014be003d6140a093'
            'a91c863c5d3f7a5e199e3c218ffa1b21466f75d6211c69eb7b0dd1afe5096eae85466dce968536d62dbc7063303a181eeca6c6d499b8366072c2208b43ad2bd2')
b2sums=('e2e0c617a2e9ec45f5dd3aa8e393b54a52ecb6543ac0e7057a9b4306493fe578de006bf0d8fa128f4d1925cfb6524eb56d15565baaf41045b3b32d5af2cd8dfa'
        'c9c6ba224b9b27f4ecc6b1ded6621a8abb52b1ded2d9078e4cad31177290b788e286fad74545a5cb09e1f6726515adc22003988eb646dc986e87f1a8061a0e27'
        '2a4ddc9849562e3a0adcaec1859391e3f37a63f25c27dbc140cabd697bd65b89a0fc812c4516cbdfb36d1f30844df34934b3c1c59650101f54fc1ac0acb3f5d9'
        '272b4860dbd3f2b69eedfed4532cf8a388629c003c9a0e0ee98defbc2023e07edc26275a17f56ea9fd4d90e9b3b6532c5b10d1e2b91e6ab4df242ac44101d802'
        '5e9f0350a1553fc75aea88ce355fb68b881e3b2194ac0e3c6f3cecdae79111fb1db1cfe3b4933eca15af5f985fc6b89e4d9af3844b6e9cfd542828b6b9e57ed9'
        '81498526ffc44c875758dcbeb37344889f86abe95fe28c598a0bbde612df384b1b94afdd345dfb1d294634cb1ed2f8ff8b54772beee96e195209dbf3d837fba3')

prepare() {
  cd "${_name}-${pkgver}"
  # create version files, so that autotools macros can use them:
  # https://gitlab.com/sane-project/backends/-/issues/440
  echo "${pkgver}" > .tarball-version
  echo "${pkgver}" > .version
  autoreconf -fiv

  # fix http://vasks.debian.org/tracker/?func=detail&atid=410366&aid=313760&group_id=30186
  #patch -Np1 -i ${srcdir}/enable-networking.patch
}

build() {
  cd "${_name}-${pkgver}"

  ./configure --prefix=/usr \
    --disable-locking \
    --disable-rpath \
    --docdir="/usr/share/doc/sane" \
    --enable-pthread \
    --localstatedir=/var \
    --sbindir=/usr/bin \
    --sysconfdir=/etc \
    --with-avahi \
    --with-libcurl \
    --with-pic \
    --with-poppler-glib \
    --with-systemd \
    --with-usb

  # circumvent overlinking in libraries
  sed -e 's/ -shared / -Wl,-O1,--as-needed\0/g' \
      -i libtool

  make
}

package() {
  depends+=('libavahi-client.so' 'libavahi-common.so' 'libcurl.so'
  'libgphoto2.so' 'libgobject-2.0.so' 'libpoppler-glib.so' 'libsystemd.so'
  'libtiff.so' 'libusb-1.0.so')

  cd "${_name}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  # generate udev udev+hwdb
  install -vdm 755 "${pkgdir}/usr/lib/udev/rules.d/"
  tools/sane-desc -m udev+hwdb -s doc/descriptions/ > "${pkgdir}/usr/lib/udev/rules.d/65-sane.rules"
  tools/sane-desc -m udev+hwdb -s doc/descriptions-external/ >> "${pkgdir}/usr/lib/udev/rules.d/65-sane.rules"
  # generate udev hwdb
  install -vdm 755 "${pkgdir}/usr/lib/udev/hwdb.d/"
  tools/sane-desc -m hwdb -s doc/descriptions/ > "${pkgdir}/usr/lib/udev/hwdb.d/20-sane.hwdb"
  # NOTE: an empty new line is required between the two .desc collections
  printf "\n" >> "${pkgdir}/usr/lib/udev/hwdb.d/20-sane.hwdb"
  tools/sane-desc -m hwdb -s doc/descriptions-external/ >> "${pkgdir}/usr/lib/udev/hwdb.d/20-sane.hwdb"

  # systemd integration
  install -vDm 644 "../saned.socket" \
      -t "${pkgdir}/usr/lib/systemd/system/"
  install -vDm 644 "../saned.service" \
      "${pkgdir}/usr/lib/systemd/system/saned@.service"
  install -vDm 644 "../66-saned.rules" "${pkgdir}/usr/lib/udev/rules.d/"
  # sysusers.d
  install -vDm 644 "../sane.sysusers" "${pkgdir}/usr/lib/sysusers.d/sane.conf"

  # remove old ChangeLogs
  rm -rvf "${pkgdir}/usr/share/doc/sane/ChangeLogs/"

  # add files below /etc/sane.d to backup array
  cd "${pkgdir}"
  # trick extract_function_variable() in makepkg into not detecting the
  # backup array modification and adding remaining configuration files
  [[ /usr/bin/true ]] && backup=( ${backup[@]} $(find "etc/sane.d/" -type f) )
}
