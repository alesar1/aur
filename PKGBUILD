# Contributor: Aaron McDaniel (mcd1992) <'aur' at the domain 'fgthou.se'>
# Contributor: Matheus de Alcantara <matheus.de.alcantara@gmail.com>
# Contributor: Brenton Horne <brentonhorne77 at gmail dot com>
# Contributor: Nicola Squartini <tensor5@gmail.com>

_name=atom
pkgname=atom-editor-git
pkgver=1.56.0.dev.r365.g924b06347
pkgrel=1
pkgdesc='Hackable text editor for the 21st Century - git channel'
arch=('x86_64')
url="https://atom.io/"
license=('MIT' 'custom')
depends=('apm' 'electron6' 'libxkbfile' 'ripgrep')
makedepends=('git' 'npm' 'gconf' 'nodejs' 'libsecret' 'python')
optdepends=('ctags: symbol indexing support'
            'git: Git and GitHub integration')
conflicts=('atom')
provides=('atom')
options=(!emptydirs)
source=("git+https://github.com/atom/atom.git"
        'atom.js'
        'dugite-use-system-git.patch'
        'fix-atom-sh.patch'
        'fix-license-path.patch'
        'fix-restart.patch'
        'git-utils.patch'
        'no-unsafe-eval-warning.patch'
        'node-env-production.patch'
        'symbols-view-use-system-ctags.patch'
        'use-system-apm.patch'
        'use-system-electron.patch')
==== BASE ====
sha256sums=('SKIP')
==== BASE ====

pkgver() {
    cd ${_name}
     atom_version=$(node -e 'console.log(require("./package").version)')
    # To strip ".dev" from the package version, comment out the line above, and uncomment the line below.
    # atom_version=$(node -e 'console.log(require("./package").version)' | grep -o '[0-9.]*')
    atom_version_base_commit=$(git log --oneline | grep $atom_version | grep -o "[0-f]* ")
    # If the command on the line above doesn't find a "base" commit on `master` branch for the current Atom version,
    # then the latest commit on `master` branch will be tagged instead, and revisions (".r") in the package version will be "0".
    git tag -f $atom_version $atom_version_base_commit
    # Remove 'v' prefix on tags; prefix revision with 'r'; replace all '-' with '.'
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ${_name}

  patch -Np1 -i ../fix-atom-sh.patch
  patch -Np1 -i ../use-system-electron.patch
  patch -Np1 -i ../use-system-apm.patch
  patch -Np1 -i ../fix-license-path.patch
  patch -Np1 -i ../fix-restart.patch
  patch -Np1 -i ../node-env-production.patch
  patch -Np1 -i ../no-unsafe-eval-warning.patch
}

build() {
  cd ${_name}

  ATOM_RESOURCE_PATH="${PWD}" \
  npm_config_build_from_source=true \
  npm_config_target=$(< /usr/lib/electron6/version) \
  apm install

  # Use system ctags
  cd node_modules/symbols-view
  patch -Np1 -i "${srcdir}"/symbols-view-use-system-ctags.patch
  rm -r lib/ctags-config vendor
  cd ../..

  # Use system git
  cd node_modules/dugite
  patch -Np1 -i "${srcdir}"/dugite-use-system-git.patch
  rm -r git
  cd ../..

  # Fix issue with:
  # build/Release/git.node: undefined symbol: git_net_url_is_default_port
  cd node_modules/git-utils
  patch -Np1 -i "${srcdir}"/git-utils.patch
  env \
    npm_config_disturl=https://electronjs.org/headers \
    npm_config_runtime=electron \
    npm_config_target=$(< /usr/lib/electron6/version) \
    node-gyp rebuild
  cd ../..

  cd script
  npm install

  cd script-runner
  npm install

  cd ..
  # Set ELECTRON_VERSION (see use-system-electron.patch)
  env \
    ELECTRON_RUN_AS_NODE=1 \
    ELECTRON_VERSION=$(< /usr/lib/electron6/version) \
    electron6 \
    build --no-bootstrap
}

package() {
  cd ${_name}

  install -d -m 755 "${pkgdir}"/usr/lib
  cp -r out/app "${pkgdir}"/usr/lib/atom
  install -m 644 out/startup.js "${pkgdir}"/usr/lib/atom
  install -m 755 "${srcdir}/atom.js" "${pkgdir}"/usr/lib/atom/atom

  ln -sf /usr/bin/rg "${pkgdir}/usr/lib/atom/node_modules/vscode-ripgrep/bin/rg"

  install -d -m 755 "${pkgdir}/usr/share/applications"
  sed -e "s|<%= appName %>|Atom|" \
      -e "s/<%= description %>/${pkgdesc}/" \
      -e "s|<%= installDir %>|/usr|" \
      -e "s|<%= appFileName %>|atom|" \
      -e "s|<%= iconPath %>|atom|" \
      resources/linux/atom.desktop.in > "${pkgdir}/usr/share/applications/atom.desktop"

  for size in 16 24 32 48 64 128 256 512 1024; do
    install -D -m 644 resources/app-icons/stable/png/${size}.png \
            "${pkgdir}"/usr/share/icons/hicolor/${size}x${size}/apps/atom.png
  done
  ln -sf ../../../share/icons/hicolor/1024x1024/apps/atom.png \
      "${pkgdir}"/usr/lib/atom/resources/atom.png

  install -D -m 755 atom.sh "${pkgdir}/usr/bin/atom"

  install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgname}"
  node -e "require('./script/lib/get-license-text')().then((licenseText) => require('fs').writeFileSync('${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.md', licenseText))"

  # Remove useless stuff
  find "${pkgdir}"/usr/lib/atom/node_modules \
      -name "*.a" -exec rm '{}' \; \
      -or -name "*.bat" -exec rm '{}' \; \
      -or -name "*.c" -exec rm '{}' \; \
      -or -name "*.cpp" -exec rm '{}' \; \
      -or -name "*.node" -exec chmod a-x '{}' \; \
      -or -name "benchmark" -prune -exec rm -r '{}' \; \
      -or -name "doc" -prune -exec rm -r '{}' \; \
      -or -name "html" -prune -exec rm -r '{}' \; \
      -or -name "man" -prune -exec rm -r '{}' \; \
      -or -name "scripts" -prune -exec rm -r '{}' \; \
      -or -path "*/less/gradle" -prune -exec rm -r '{}' \; \
      -or -path "*/task-lists/src" -prune -exec rm -r '{}' \;
}
