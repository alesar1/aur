MRuby::Build.new do |conf|
  toolchain :gcc

  conf.gem __dir__
  conf.gem github: 'eagletmt/mitamae-pacman', checksum_hash: 'v0.2.0'
  conf.gem github: 'eagletmt/mitamae-secrets', checksum_hash: 'v0.1.1'
  conf.gem github: 'IceDragon200/mruby-catch-throw', checksum_hash: 'v1.1.0'
  conf.gem github: 'iij/mruby-dir', checksum_hash: '0c3c538855dd15208d34fee96b13675e564bb4b6' # Latest
  conf.gem github: 'gromnitsky/mruby-dir-glob', checksum_hash: '334c040a2e2c4c2689f8c3440168011f64d57ada' # Latest
  conf.gem github: 'iij/mruby-env', checksum_hash: '57f0d737a4ece49dc5b6f1c7ee09b0bc8f8adf87' # Latest
  conf.gem github: 'k0kubun/mruby-erb', checksum_hash: '978257e478633542c440c9248e8cdf33c5ad2074' # Specified by mitamae
  conf.gem github: 'iij/mruby-errno', checksum_hash: 'b4415207ff6ea62360619c89a1cff83259dc4db0' # Latest
  conf.gem github: 'eagletmt/mruby-etc', checksum_hash: 'v0.1.0' # Specified by mitamae
  conf.gem github: 'ksss/mruby-file-stat', checksum_hash: '1d72447005eaba01a097066ec47f9725887c90bc'  # Latest
  conf.gem github: 'k0kubun/mruby-hashie', checksum_hash: 'bfdbb8aebc8786bc9e88469dae87a8dfe8ec4300'  # Specified by mitamae
  conf.gem github: 'mattn/mruby-http', checksum_hash: '22d4fccd820705f6bef8e8f4989bdb4cf435f576' # Latest
  conf.gem github: 'matsumotory/mruby-httprequest', checksum_hash: '9a0b6a0a2e5918b60501af412163000e3db83c58' # Latest
  conf.gem github: 'iij/mruby-iijson', checksum_hash: '2472d063fce158249862b43bf51a84aec63336c7'  # Latest
  conf.gem github: 'k0kubun/mruby-io', checksum_hash: '6cb5d157341ceec8f5818ce0000fa99920258c11'  # Specified by mitamae
  conf.gem github: 'mattn/mruby-onig-regexp', checksum_hash: 'fdb7f839bca649c6456666355d374bd897c6c2d1'  # Latest
  conf.gem github: 'k0kubun/mruby-open3', checksum_hash: '25a8479b8732d1902932f96aa9dcb45ea2977fba' # Specified by mitamae
  conf.gem github: 'fastly/mruby-optparse', checksum_hash: 'e6397a090d1efe04d5dab57c63897f0d79bbad89' # Latest
  conf.gem github: 'iij/mruby-pack', checksum_hash: 'cc66bf94d1106b5b444a0e96f087f8522fa6b1b5' # Latest
  conf.gem github: 'iij/mruby-process', checksum_hash: '7308e8f4737cb33e3a3d92e60169983a6ebddd08' # Latest
  conf.gem github: 'k0kubun/mruby-shellwords', checksum_hash: '2a284d99b2121615e43d6accdb0e4cde1868a0d8'  # Specified by mitamae
  conf.gem github: 'matsumotory/mruby-simplehttp', checksum_hash: '8c15d5339f4db689ffd13e407c97cd84e9eec813' # Latest
  conf.gem github: 'iij/mruby-socket', checksum_hash: 'b2a0c9c6bf62273b734d715e6eaab4c1f2c2892c' # Latest
  conf.gem github: 'k0kubun/mruby-specinfra', checksum_hash: 'ebfb79f312b910f13b70186fbedfdd5ef61f2988' # Specified by mitamae
  conf.gem github: 'iij/mruby-tempfile', checksum_hash: 'bffd5995044123bc536f212dedef9822a02e5cbc'  # Latest
  conf.gem github: 'hone/mruby-yaml', checksum_hash: 'dd34566926a6f90667983052efc40143427fea49' # Latest
end
