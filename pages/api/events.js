export default async function handler(req, res) {
  await cors(req, res);

  if (req.method == 'POST') {
    const { id, name, description, organizers, fee, teamSize } = res.body;
  }
}
