# Maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Maintainer: Christian Rebischke <echo Q2hyaXMuUmViaXNjaGtlQGdtYWlsLmNvbQo= |  base64 -d>
# Contributor: Babken Vardanyan - axper <483ken 4t gma1l
# Contributor: MrZYX from Arch Linux Forums
# Contributor: Sabart Otto - Seberm <seberm[at]seberm[dot]com>
# Contributor: Tobias Veit - nIcE <m.on.key.tobi[at]gmail[dot]com>
# Contributor: al.janitor <al.janitor [at] sdf [dot] org>

pkgname=metasploit-git
pkgver=4.16.30.44602.9fbddd6474
pkgrel=1
epoch=1
pkgdesc='Advanced open-source platform for developing, testing, and using exploit code'
url='https://www.metasploit.com/'
arch=('x86_64')
license=('BSD')
depends=('ruby2.4' 'libpcap' 'postgresql-libs' 'ruby2.4-bundler' 'sqlite' 'libxslt' 'git')
optdepends=('ruby-pg: database support')
provides=('metasploit')
conflicts=('metasploit')
options=('!strip' '!emptydirs')
source=(${pkgname}::git+https://github.com/rapid7/metasploit-framework.git
        metasploit-dont-restrict-aggregator.patch)
sha512sums=('SKIP'
            '71611dd350a3f74b6ba61d1508b57d357de221bb676d25d96d5bbcd898e5cabb978ffb9c6c3b37559055fb886c11fe4fed64d8b701d1d94dfff057a32ed53b00')

pkgver() {
  cd ${pkgname}
  printf "%s.%s.%s" \
    "$(git tag -l|grep -P '.+\..+\.\d+'|sed -r 's|v?([0-9\.]+)(-.+)?|\1|g'|sort -V -r|head -n1)" \
    "$(git rev-list --count HEAD)" \
    "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${pkgname}
  bundle-2.4 config build.nokogiri --use-system-libraries
  sed 's|git ls-files|find -type f|' -i metasploit-framework.gemspec
  patch -R -p1 < "${srcdir}/metasploit-dont-restrict-aggregator.patch"
}

build() {
  cd ${pkgname}
  bundle-2.4 install -j"$(nproc)" --no-cache --deployment
  find vendor/bundle/ruby -exec chmod o+r '{}' \;
}

package() {
  cd ${pkgname}

  install -d "${pkgdir}/opt/${pkgname}" "${pkgdir}/usr/bin"
  find . -maxdepth 1 -mindepth 1 -not -path './.git*' -exec cp -r '{}' "${pkgdir}/opt/${pkgname}" \;

  for f in "${pkgdir}"/opt/${pkgname}/msf*; do
    local _msffile="${pkgdir}/usr/bin/`basename "${f}"`"
    echo -e "#!/bin/sh\nBUNDLE_GEMFILE=/opt/${pkgname}/Gemfile bundle-2.4 exec ruby-2.4 /opt/${pkgname}/`basename "${f}"` \"\$@\"" > "${_msffile}"
    chmod 755 "${_msffile}"
  done

  (cd "${pkgdir}/opt/${pkgname}"
    for f in tools/*/*.rb; do
      install -Dm 755 "${f}" ".${f}"
      echo -e "#!/bin/sh\nBUNDLE_GEMFILE=/opt/${pkgname}/Gemfile bundle-2.4 exec ruby-2.4 /opt/${pkgname}/."${f}" \"\$@\"" > "${f}"
      chmod 755 "${f}"
    done
  )

  install -Dm 644 external/zsh/_* -t "${pkgdir}/usr/share/zsh/site-functions"
  install -Dm 644 LICENSE COPYING -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -d "${pkgdir}/usr/share/doc"
  mv "${pkgdir}/opt/${pkgname}/documentation" "${pkgdir}/usr/share/doc/${pkgname}"
  rm "${pkgdir}/usr/bin/msfupdate"
}

# vim: ts=2 sw=2 et:
