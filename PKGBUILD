# Maintainer: dreieck
# Contributor: Christian Hesse <mail@eworm.de>

_pkgname='claws-mail'
_pkgvariant='-gtk2-protectedheaders-nonm'
_pkgvcs='-git'
pkgname="${_pkgname}${_pkgvariant}${_pkgvcs}"
epoch=0
pkgver=3.18.0.295+r11447.20211106.71e1e70a4
pkgrel=2
pkgdesc="A GTK+ based e-mail client. With patch to show 'protected headers' (currently only IETF draft, not enigmail flavour), without network manager dependency. Latest git checkout."
arch=(
  'i686'
  'x86_64'
)
license=('GPL3')
# url='https://www.claws-mail.org/'
url=http://thewildbeast.co.uk/claws-mail/bugzilla/show_bug.cgi?id=4426
depends=(
  'compface'
  'dbus-glib'
  'desktop-file-utils'
  'enchant'
  'gnutls'
  'gpgme'
  'gtk2'
  'hicolor-icon-theme'
  'libetpan'
  'libsm'
  'startup-notification'
)
makedepends=(
  # Dependencies to fetch and prepare the source, and configure the software:
  'python'
  'git'
  # Dependencies to compile the main software:
  'bogofilter'
  'spamassassin'
  # Dependencies for plugins:
  'dillo'
  'gumbo-parser'
  'libcanberra'
  'libgdata'
  'libical'
  'libnotify'
  'libytnef'
  'poppler-glib'
  'pygtk'
  # Dependencies to build the docs:
  'docbook-utils'
  'texlive-core'
  'texlive-formatsextra'
)
optdepends=(
  'bogofilter:        Adds support for spamfiltering.'
  'clawsker:          GUI to configure advanced claws-mail settings.'
  'curl:              For vcalendar, rssyl and spamreport plugins.'
  'dbus:              For notification plugin.'
  'dillo:             For dillo html viewer plugin.'
  'ghostscript:       For pdf viewer plugin.'
  'gumbo-parser:      For litehtml_viewer plugin.'
  # 'jpilot:            For jpilot (palm pilot connection) plugin.'
  'libarchive:        For archive plugin and various other plugins.'
  'libcanberra:       For notification plugin.'
  'libgdata:          For gdata plugin.'
  'libical:           For iCalendar plugin.'
  'libnotify:         For notification plugin.'
  'libxml2:           For rssyl plugins.'
  'libytnef:          For tnef_parse plugin.'
  'perl:              Needed for some tools and perl plugin.'
  'poppler-glib:      For PDF viewer plugin.'
  'python:            For some tools/ plugins.'
  'python2:           For Python plugin.'
  'spamassassin:      Adds support for spamfiltering.'
)
replaces=(
  "${_pkgname}-plugins"
  "${_pkgname}-extra-plugins"
  'sylpheed-claws'
)
conflicts=(
  "${_pkgname}"
  "${_pkgname}-plugins"
  "${_pkgname}-extra-plugins"
)
provides=(
  "claws=${pkgver}"
  "${_pkgname}=${pkgver}"
  "${_pkgname}-git=${pkgver}"
  "${_pkgname}-gtk2=${pkgver}"
  "${_pkgname}-nonm=${pkgver}"
  "${_pkgname}-protectedheaders=${pkgver}"
  "${_pkgname}${_pkgvariant}=${pkgver}"
  "${_pkgname}-plugins=${pkgver}"
  "${_pkgname}-extra-plugins=${pkgver}"
)
options=('emptydirs')
source=(
  "${_pkgname}::git://git.claws-mail.org/claws.git" # Vanilla source from main upstream
  # "${_pkgname}::git://github.com/ahngoo8Gongi/claws-mail.git#branch=protected-headers" # Source where protected headers support get's developed
  'protectedheaders-ietf.patch::https://www.thewildbeast.co.uk/claws-mail/bugzilla/attachment.cgi?id=2260' # https://www.thewildbeast.co.uk/claws-mail/bugzilla/show_bug.cgi?id=4426#c17
)
sha256sums=(
  'SKIP' # main sorce (git)
  '6c11ec02b0184e5552689cc1316b88b08fe541bae42991e26cb32e7783493ea4' # protectedheaders-ietf.patch
)

# options+=('ccache')

prepare() {
  cd "${srcdir}/${_pkgname}"

  for _patch in 'protectedheaders-ietf.patch'; do
    msg2 "Applying patch ${_patch} ..."
    patch -N -p0 -i "${srcdir}/${_patch}"
  done

  msg2 "Running ./autogen.sh ..."
  NOCONFIGURE=1 ./autogen.sh
}

pkgver() {
  cd "${srcdir}/${_pkgname}"

  _ver="$(git describe  --tags | sed 's|^v||' | sed 's|-[^-]*$||' | tr '-' '.')"
  _rev="$(git rev-list --count HEAD)"
  _date="$(git log -1 --date=format:"%Y%m%d" --format="%ad")"
  _hash="$(git rev-parse --short HEAD)"

  if [ -z "${_ver}" ]; then
    error "Version could not be determined."
    return 1
  else
    printf '%s' "${_ver}+r${_rev}.${_date}.${_hash}"
  fi
}

build() {
  cd "${srcdir}/${_pkgname}"

  # Configure the software.
  # * jpilot: Even if enabled, the summary after ./configure says it is disabled. Since I also could not install the `jpilot` software to test if this enables this plugin since the dependency `pilot-link` fails to build, it has been explcitly disabled.
  # * netoworkmanager: Explicitly disabled in order that this package does not need networkmanager dependencies.
  # * alternate-addressbook: Enabling this has effects on the builtin addressbook. It then depends on claws-contacts as external software.
  # * tests: Enabling this leads to error 'make[6]: *** No rule to make target '../pgpcore_la-pgp_utils.o', needed by 'pgp_utils_test'.  Stop.'.
  # * fancy-plugin: In the gtk2 version of claws mail, this HTML renderer plugin depends on some wxgtk1 which is not anymore (easily) available on Arch Linux.
  msg2 "Running ./configure ..."
  ./configure \
    --prefix='/usr' \
    --disable-static \
    --enable-shared \
    --enable-nls \
    --enable-manual \
    --enable-libsm \
    --enable-ipv6 \
    --enable-gnutls \
    --enable-enchant \
    --enable-crash-dialog \
    --disable-generic-umpc \
    --enable-compface \
    --enable-pthread \
    --enable-startup-notification \
    --enable-dbus \
    --enable-ldap \
    --disable-jpilot \
    --disable-networkmanager \
    --enable-libetpan \
    --disable-valgrind \
    --disable-alternate-addressbook \
    --enable-svg \
    --disable-tests \
    --enable-deprecated \
    --enable-acpi_notifier-plugin \
    --enable-address_keeper-plugin \
    --enable-archive-plugin \
    --enable-att_remover-plugin \
    --enable-attachwarner-plugin \
    --enable-bogofilter-plugin \
    --enable-bsfilter-plugin \
    --enable-clamd-plugin \
    --enable-dillo-plugin \
    --disable-fancy-plugin \
    --enable-fetchinfo-plugin \
    --enable-gdata-plugin \
    --enable-libravatar-plugin \
    --enable-litehtml_viewer-plugin \
    --enable-mailmbox-plugin \
    --enable-managesieve-plugin \
    --enable-newmail-plugin \
    --enable-notification-plugin \
    --enable-pdf_viewer-plugin \
    --enable-perl-plugin \
    --enable-python-plugin \
    --enable-pgpcore-plugin \
    --enable-pgpmime-plugin \
    --enable-pgpinline-plugin \
    --enable-rssyl-plugin \
    --enable-smime-plugin \
    --enable-spamassassin-plugin \
    --enable-spam_report-plugin \
    --enable-tnef_parse-plugin \
    --enable-vcalendar-plugin \
    --enable-demo-plugin
    #--help

  msg2 "Running make ..."
  make

  # Build extra tools:
  cd tools/
  msg2 "Running make in tools/ ..."
  make
}

package() {
  cd "${srcdir}/${_pkgname}"


  # Copy the software's files in place:
  msg2 "Running make install ..."
  make DESTDIR="${pkgdir}" install

  # Install more information files:
  msg2 "Installing further documentation ..."
  install -D -v -m644 COPYING "${pkgdir}/usr/share/lincenses/${pkgname}/COPYING"
  for _docfile in ABOUT-NLS AUTHORS ChangeLog* INSTALL NEWS README RELEASE_NOTES TODO version; do
    install -D -v -m644 "${_docfile}" "${pkgdir}/usr/share/doc/${_pkgname}/${_docfile}"
  done
  ln -sv "/usr/lib/claws-mail/tools/README" "${pkgdir}/usr/share/doc/claws-mail/README-tools"
  ln -sv "/usr/share/lincenses/${pkgname}/COPYING" "${pkgdir}/usr/share/doc/${_pkgname}/COPYING"


  cd tools

  # Install bash-completion:
  msg2 "Installing bash completion ..."
  install -v -D -m644 "bash_completion/claws-mail" "${pkgdir}/usr/share/bash-completion/completions/claws-mail"

  # install extra tools:
  msg2 "Installing extra tools ..."
  install -v -m755 -d "${pkgdir}"/usr/lib/claws-mail/tools
  find -type f -maxdepth 1 -not -name 'Makefile*' | while read _file; do
    case "${_file}" in
      *.pl|*.py|*.sh|tb2claws-mail|update-po|uudec|uuooffice)
        install -v -D -m755 "${_file}" "${pkgdir}/usr/lib/claws-mail/tools/${_file}"
      ;;
      *)
        install -v -D -m644 "${_file}" "${pkgdir}/usr/lib/claws-mail/tools/${_file}"
      ;;
    esac
  done
  for _dir in kdeservicemenu; do
    cp -av "${_dir}" "${pkgdir}/usr/lib/claws-mail/tools"/
  done
}
